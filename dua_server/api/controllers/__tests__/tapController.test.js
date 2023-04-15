const Tap = require("../../models/Tap");
const tapController = require("../../controllers/tapController");

jest.mock("../../models/Tap", () => ({
  create: jest.fn(),
  findByPk: jest.fn(),
}));

describe("tapController", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("createTap", () => {
    it("should create a new tap entry", async () => {
      const req = {
        body: {
          trial_id: 1,
          tap_on_screen_number: 1,
          screen_name: "screen1",
          screen_seq: 1,
          trial_runtime_ms: 1000,
          press_start: 0,
          press_end: 100,
          press_duration_ms: 100,
          action_initiated: "action1",
        },
      };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
      const newTap = {
        id: 1,
        TRIAL_ID: 1,
        TAP_ON_SCREEN_NUMBER: 1,
        SCREEN_NAME: "screen1",
        SCREEN_SEQ: 1,
        TRIAL_RUNTIME_MS: 1000,
        PRESS_START: 0,
        PRESS_END: 100,
        PRESS_DURATION_MS: 100,
        ACTION_INITIATED: "action1",
      };
      Tap.create.mockResolvedValue(newTap);

      await tapController.createTap(req, res);

      expect(Tap.create).toHaveBeenCalledWith({
        TRIAL_ID: 1,
        TAP_ON_SCREEN_NUMBER: 1,
        SCREEN_NAME: "screen1",
        SCREEN_SEQ: 1,
        TRIAL_RUNTIME_MS: 1000,
        PRESS_START: 0,
        PRESS_END: 100,
        PRESS_DURATION_MS: 100,
        ACTION_INITIATED: "action1",
      });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "New tap created successfully",
        data: newTap,
      });
    });

    it("should return 500 if there is an error", async () => {
      const req = {
        body: {
          trial_id: 1,
          tap_on_screen_number: 1,
          screen_name: "screen1",
          screen_seq: 1,
          trial_runtime_ms: 1000,
          press_start: 0,
          press_end: 100,
          press_duration_ms: 100,
          action_initiated: "action1",
        },
      };
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
      Tap.create.mockRejectedValue(new Error("Database error"));

      await tapController.createTap(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: "Error in tapController - createTap: Failed to create new tap",
        error: "Database error",
      });
    });
  });
  describe("tapController", () => {
    describe("getTap", () => {
      it("should return a tap when given a valid id", async () => {
        // Mocking Tap.findByPk to return a sample tap object
        Tap.findByPk = jest.fn().mockResolvedValue({
          id: 1,
          trial_id: 2,
          tap_on_screen_number: 3,
          screen_name: "screen1",
          screen_seq: 1,
          trial_runtime_ms: 1000,
          press_start: "2022-01-01 00:00:00",
          press_end: "2022-01-01 00:00:01",
          press_duration_ms: 1000,
          action_initiated: "action1",
          createdAt: "2022-01-01 00:00:00",
          updatedAt: "2022-01-01 00:00:00",
        });

        const req = { params: { id: 1 } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        await tapController.getTap(req, res);

        expect(Tap.findByPk).toHaveBeenCalledWith(1);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
          success: true,
          message: "Tap retrieved successfully",
          data: {
            id: 1,
            trial_id: 2,
            tap_on_screen_number: 3,
            screen_name: "screen1",
            screen_seq: 1,
            trial_runtime_ms: 1000,
            press_start: "2022-01-01 00:00:00",
            press_end: "2022-01-01 00:00:01",
            press_duration_ms: 1000,
            action_initiated: "action1",
            createdAt: "2022-01-01 00:00:00",
            updatedAt: "2022-01-01 00:00:00",
          },
        });
      });

      it("should return a 404 error when given an invalid id", async () => {
        // Mocking Tap.findByPk to return null
        Tap.findByPk = jest.fn().mockResolvedValue(null);

        const req = { params: { id: 1 } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        await tapController.getTap(req, res);

        expect(Tap.findByPk).toHaveBeenCalledWith(1);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({
          success: false,
          message: "Tap not found",
        });
      });

      it("should return a 500 error when an error occurs", async () => {
        // Mocking Tap.findByPk to throw an error
        Tap.findByPk = jest
          .fn()
          .mockRejectedValue(new Error("Database connection error"));

        const req = { params: { id: 1 } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        await tapController.getTap(req, res);

        expect(Tap.findByPk).toHaveBeenCalledWith(1);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
          success: false,
          message: "Error in tapController - getTap: Failed to retrieve tap",
          error: "Database connection error",
        });
      });
    });
  });
});
