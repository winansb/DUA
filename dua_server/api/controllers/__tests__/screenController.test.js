const screenController = require("../../controllers/screenController");
const Screen = require("../../models/Screen");

jest.mock("../../models/Screen");

describe("Screen controller", () => {
  // Create Screen
  describe("createScreen", () => {
    it("should create a new screen", async () => {
      // Arrange
      const req = {
        body: {
          SCREEN_NUMBER_IN_ORDER: 1,
          LOCAL_TIME_AT_START: "2023-04-05T10:00:00Z",
          TRIAL_RUNTIME_AT_START_SECONDS: 0,
          SCREEN_NAME: "Intro Screen",
          TRIAL_ID: 1,
          VIDEO_PLAYING: false,
          VIDEO_TIME_AT_START_SECONDS: 0,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(Screen, "create").mockResolvedValueOnce(req.body);

      // Act
      await screenController.createScreen(req, res);

      // Assert
      expect(Screen.create).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(req.body);
    });

    it("should return a 500 if there is an error creating the screen", async () => {
      // Arrange
      const req = {
        body: {
          SCREEN_NUMBER_IN_ORDER: 1,
          LOCAL_TIME_AT_START: "2023-04-05T10:00:00Z",
          TRIAL_RUNTIME_AT_START_SECONDS: 0,
          SCREEN_NAME: "Intro Screen",
          TRIAL_ID: 1,
          VIDEO_PLAYING: false,
          VIDEO_TIME_AT_START_SECONDS: 0,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(Screen, "create").mockRejectedValueOnce("Some error message");
      console.error = jest.fn();

      // Act
      await screenController.createScreen(req, res);

      // Assert
      expect(Screen.create).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error:
          "Error in screenController - createScreen: failed to make new screen",
      });
      expect(console.error).toHaveBeenCalledWith("Some error message");
    });
  });

  // Finish Screen
  describe("finishScreen", () => {
    it("should update screen and return updated screen JSON", async () => {
      // Arrange
      const req = {
        params: { uid: "1" },
        body: {
          SCREEN_DURATION_SECONDS: 10,
          EXIT_METHOD: "back",
          VIDEO_TIME_AT_END: 8,
        },
      };
      const res = { send: jest.fn() };
      const updatedScreen = {
        toJSON: jest
          .fn()
          .mockReturnValueOnce({
            UID: "1",
            SCREEN_DURATION_SECONDS: 10,
            EXIT_METHOD: "back",
            VIDEO_TIME_AT_END: 8,
          }),
      };
      Screen.update.mockResolvedValueOnce([1, [updatedScreen]]);

      // Act
      await screenController.finishScreen(req, res);

      // Assert
      expect(Screen.update).toHaveBeenCalledWith(
        {
          SCREEN_DURATION_SECONDS: 10,
          EXIT_METHOD: "back",
          VIDEO_TIME_AT_END: 8,
        },
        {
          where: { UID: "1" },
          returning: true,
        }
      );
      expect(res.send).toHaveBeenCalledWith({
        UID: "1",
        SCREEN_DURATION_SECONDS: 10,
        EXIT_METHOD: "back",
        VIDEO_TIME_AT_END: 8,
      });
    });

    it("should return 404 error when screen is not found", async () => {
      // Arrange
      const req = {
        params: { uid: "2" },
        body: {
          SCREEN_DURATION_SECONDS: 10,
          EXIT_METHOD: "back",
          VIDEO_TIME_AT_END: 8,
        },
      };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      Screen.update.mockResolvedValueOnce([0]);

      // Act
      await screenController.finishScreen(req, res);

      // Assert
      expect(Screen.update).toHaveBeenCalledWith(
        {
          SCREEN_DURATION_SECONDS: 10,
          EXIT_METHOD: "back",
          VIDEO_TIME_AT_END: 8,
        },
        {
          where: { UID: "2" },
          returning: true,
        }
      );
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith({
        error: "ScreenController - finishScreen: Screen not found",
      });
    });

    it("should return 500 error when there is an error in update", async () => {
      // Arrange
      const req = {
        params: { uid: "1" },
        body: {
          SCREEN_DURATION_SECONDS: 10,
          EXIT_METHOD: "back",
          VIDEO_TIME_AT_END: 8,
        },
      };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      Screen.update.mockRejectedValueOnce(new Error("Update failed"));

      // Act
      await screenController.finishScreen(req, res);

      // Assert
      expect(Screen.update).toHaveBeenCalledWith(
        {
          SCREEN_DURATION_SECONDS: 10,
          EXIT_METHOD: "back",
          VIDEO_TIME_AT_END: 8,
        },
        {
          where: { UID: "1" },
          returning: true,
        }
      );
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith({
        error: "Error in screenController - finishScreen",
      });
    });
  });

  // Get Screen
  const Screen = require("../../models/Screen");
  const screenController = require("../screenController");

  describe("getScreen", () => {
    it("should return screen if found", async () => {
      // Arrange
      const req = { params: { uid: "1" } };
      const res = { send: jest.fn() };
      const screen = {
        toJSON: jest
          .fn()
          .mockReturnValueOnce({
            UID: "1",
            SCREEN_DURATION_SECONDS: 10,
            EXIT_METHOD: "exit",
            VIDEO_TIME_AT_END: 5,
          }),
      };
      jest.spyOn(Screen, "findOne").mockResolvedValueOnce(screen);

      // Act
      await screenController.getScreen(req, res);

      // Assert
      expect(res.send).toHaveBeenCalledWith(
        expect.objectContaining({
          UID: "1",
          SCREEN_DURATION_SECONDS: 10,
          EXIT_METHOD: "exit",
          VIDEO_TIME_AT_END: 5,
        })
      );
    });

    it("should return 404 if screen not found", async () => {
      // Arrange
      const req = { params: { uid: "1" } };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      jest.spyOn(Screen, "findOne").mockResolvedValueOnce(null);

      // Act
      await screenController.getScreen(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith({
        error: "ScreenController - getScreen: Screen not found",
      });
    });

    it("should return 500 if an error occurs", async () => {
      // Arrange
      const req = { params: { uid: "1" } };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      jest
        .spyOn(Screen, "findOne")
        .mockRejectedValueOnce(new Error("Database error"));

      // Act
      await screenController.getScreen(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith({
        error: "Error in screenController - getScreen",
      });
    });
  });
});
