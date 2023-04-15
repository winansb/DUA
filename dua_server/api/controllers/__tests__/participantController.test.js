const Participant = require("../../models/Participant");
const participantController = require("../../controllers/participantController");

describe("participantController", () => {
  // Create Participant
  describe("createParticipant", () => {
    it("should create a new participant", async () => {
      // Arrange
      const req = { body: { PARTICIPANT_NAME: "John Doe" } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      // Act
      await participantController.createParticipant(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ PARTICIPANT_NAME: "John Doe" })
      );
    });

    it("should return a 500 error if an exception is thrown", async () => {
      // Arrange
      const req = { body: { PARTICIPANT_NAME: "John Doe" } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      jest
        .spyOn(Participant, "create")
        .mockRejectedValueOnce(new Error("Database error"));

      // Act
      await participantController.createParticipant(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: "Error in participantController - createParticipant",
      });
    });
  });

  // Update DETOUR_COMPLETE
  describe("updateDetourComplete", () => {
    it("should update DETOUR_COMPLETE", async () => {
      // Arrange
      const req = { params: { uid: "1" } };
      const res = { send: jest.fn() };
      const updatedParticipant = {
        toJSON: jest
          .fn()
          .mockReturnValueOnce({ UID: "1", DETOUR_COMPLETE: true }),
      };
      jest
        .spyOn(Participant, "update")
        .mockResolvedValueOnce([1, [updatedParticipant]]);

      // Act
      await participantController.updateDetourComplete(req, res);

      // Assert
      expect(res.send).toHaveBeenCalledWith(
        expect.objectContaining({ UID: "1", DETOUR_COMPLETE: true })
      );
    });

    it("should return a 404 error if the participant is not found", async () => {
      // Arrange
      const req = { params: { uid: "1" } };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      jest.spyOn(Participant, "update").mockResolvedValueOnce([0, []]);

      // Act
      await participantController.updateDetourComplete(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith({
        error:
          "ParticipantController - updateDetourComplete: Participant not found",
      });
    });

    it("should return a 500 error if an exception is thrown", async () => {
      // Arrange
      const req = { params: { uid: "1" } };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      jest
        .spyOn(Participant, "update")
        .mockRejectedValueOnce(new Error("Database error"));

      // Act
      await participantController.updateDetourComplete(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith({
        error: "Error in participantController - updateDetourComplete",
      });
    });
  });

  // Update BREAKDOWN_COMPLETE
  describe("updateBreakdownComplete", () => {
    it("should update BREAKDOWN_COMPLETE", async () => {
      // Arrange
      const req = { params: { uid: "1" } };
      const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };
      const updatedParticipant = {
        toJSON: jest
          .fn()
          .mockReturnValueOnce({ UID: "1", BREAKDOWN_COMPLETE: true }),
      };
      jest
        .spyOn(Participant, "update")
        .mockResolvedValueOnce([1, [updatedParticipant]]);

      // Act
      await participantController.updateBreakdownComplete(req, res);

      // Assert
      expect(res.send).toHaveBeenCalledWith(
        expect.objectContaining({ UID: "1", BREAKDOWN_COMPLETE: true })
      );
    });

    it("should return 404 if participant is not found", async () => {
      // Arrange
      const req = { params: { uid: "1" } };
      const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };
      jest.spyOn(Participant, "update").mockResolvedValueOnce([0]);

      // Act
      await participantController.updateBreakdownComplete(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith({
        error:
          "ParticipantController - updateBreakdownComplete: Participant not found",
      });
    });

    it("should return 500 if an error occurs", async () => {
      // Arrange
      const req = { params: { uid: "1" } };
      const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };
      jest
        .spyOn(Participant, "update")
        .mockRejectedValueOnce(new Error("Database connection error"));

      // Act
      await participantController.updateBreakdownComplete(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith({
        error: "Error in participantController - updateBreakdownComplete",
      });
    });
  });

  // Update BREAKDOWN_IN_PROGRESS
  describe("updateBreakdownInProgress", () => {
    it("should update BREAKDOWN_IN_PROGRESS", async () => {
      // Arrange
      const req = { params: { uid: "1" }, body: { breakdownInProgress: true } };
      const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };
      const updatedParticipant = {
        toJSON: jest
          .fn()
          .mockReturnValueOnce({ UID: "1", BREAKDOWN_IN_PROGRESS: true }),
      };
      jest
        .spyOn(Participant, "update")
        .mockResolvedValueOnce([1, [updatedParticipant]]);

      // Act
      await participantController.updateBreakdownInProgress(req, res);

      // Assert
      expect(Participant.update).toHaveBeenCalledWith(
        { BREAKDOWN_IN_PROGRESS: true },
        { where: { UID: "1" }, returning: true }
      );
      expect(res.send).toHaveBeenCalledWith(
        expect.objectContaining({ UID: "1", BREAKDOWN_IN_PROGRESS: true })
      );
    });

    it("should return 404 if participant not found", async () => {
      // Arrange
      const req = { params: { uid: "1" }, body: { breakdownInProgress: true } };
      const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };
      jest.spyOn(Participant, "update").mockResolvedValueOnce([0, []]);

      // Act
      await participantController.updateBreakdownInProgress(req, res);

      // Assert
      expect(Participant.update).toHaveBeenCalledWith(
        { BREAKDOWN_IN_PROGRESS: true },
        { where: { UID: "1" }, returning: true }
      );
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith({
        error:
          "ParticipantController - updateBreakdownInProgress: Participant not found",
      });
    });

    it("should handle errors", async () => {
      // Arrange
      const req = { params: { uid: "1" }, body: { breakdownInProgress: true } };
      const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };
      const error = new Error("Database error");
      jest.spyOn(Participant, "update").mockRejectedValueOnce(error);
      console.error = jest.fn();

      // Act
      await participantController.updateBreakdownInProgress(req, res);

      // Assert
      expect(Participant.update).toHaveBeenCalledWith(
        { BREAKDOWN_IN_PROGRESS: true },
        { where: { UID: "1" }, returning: true }
      );
      expect(console.error).toHaveBeenCalledWith(error);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith({
        error: "Error in participantController - updateBreakdownInProgress",
      });
    });
  });

  // Update DETOUR_IN_PROGRESS
  describe("Participant Controller", () => {
    describe("updateDetourInProgress", () => {
      it("should update DETOUR_IN_PROGRESS", async () => {
        // Arrange
        const req = { params: { uid: "1" }, body: { detourInProgress: true } };
        const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };
        const updatedParticipant = {
          toJSON: jest
            .fn()
            .mockReturnValueOnce({ UID: "1", DETOUR_IN_PROGRESS: true }),
        };
        jest
          .spyOn(Participant, "update")
          .mockResolvedValueOnce([1, [updatedParticipant]]);

        // Act
        await participantController.updateDetourInProgress(req, res);

        // Assert
        expect(res.send).toHaveBeenCalledWith(
          expect.objectContaining({ UID: "1", DETOUR_IN_PROGRESS: true })
        );
      });

      it("should return 404 if participant is not found", async () => {
        // Arrange
        const req = { params: { uid: "1" }, body: { detourInProgress: true } };
        const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };
        jest.spyOn(Participant, "update").mockResolvedValueOnce([0, []]);

        // Act
        await participantController.updateDetourInProgress(req, res);

        // Assert
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send).toHaveBeenCalledWith(
          expect.objectContaining({
            error:
              "ParticipantController - updateDetourInProgress: Participant not found",
          })
        );
      });

      it("should return 500 if error occurs", async () => {
        // Arrange
        const req = { params: { uid: "1" }, body: { detourInProgress: true } };
        const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };
        jest
          .spyOn(Participant, "update")
          .mockRejectedValueOnce(new Error("Some error occurred"));

        // Act
        await participantController.updateDetourInProgress(req, res);

        // Assert
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith(
          expect.objectContaining({
            error: "Error in participantController - updateDetourInProgress",
          })
        );
      });
    });

    // Get Participant
    describe("getParticipant", () => {
      it("should return a participant by UID", async () => {
        // Arrange
        const req = { params: { uid: "1" } };
        const res = { send: jest.fn() };
        const participant = {
          toJSON: jest.fn().mockReturnValueOnce({ UID: "1", name: "John Doe" }),
        };
        jest.spyOn(Participant, "findByPk").mockResolvedValueOnce(participant);

        // Act
        await participantController.getParticipant(req, res);

        // Assert
        expect(res.send).toHaveBeenCalledWith(
          expect.objectContaining({ UID: "1", name: "John Doe" })
        );
      });

      it("should return a 404 error when participant is not found", async () => {
        // Arrange
        const req = { params: { uid: "1" } };
        const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
        jest.spyOn(Participant, "findByPk").mockResolvedValueOnce(null);

        // Act
        await participantController.getParticipant(req, res);

        // Assert
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send).toHaveBeenCalledWith({
          error:
            "ParticipantController - getParticipantById: Participant not found",
        });
      });

      it("should return a 500 error when an error occurs", async () => {
        // Arrange
        const req = { params: { uid: "1" } };
        const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
        jest
          .spyOn(Participant, "findByPk")
          .mockRejectedValueOnce(new Error("Database error"));

        // Act
        await participantController.getParticipant(req, res);

        // Assert
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith({
          error: "Error in participantController - getParticipantById",
        });
      });
    });

    // Get all Participants
    describe("getAllParticipants", () => {
      test("should return all participants", async () => {
        const participants = [
          Participant.build({
            UID: 1,
            PARTICIPANT_NAME: "John",
            DETOUR_COMPLETE: true,
            BREAKDOWN_COMPLETE: false,
            DETOUR_IN_PROGRESS: 0,
            BREAKDOWN_IN_PROGRESS: 0,
          }),
          Participant.build({
            UID: 2,
            PARTICIPANT_NAME: "Jane",
            DETOUR_COMPLETE: false,
            BREAKDOWN_COMPLETE: true,
            DETOUR_IN_PROGRESS: 0,
            BREAKDOWN_IN_PROGRESS: 1,
          }),
        ];
        Participant.findAll = jest.fn(() => Promise.resolve(participants));
        const req = {};
        const res = { send: jest.fn(), status: jest.fn(() => res) };

        await participantController.getAllParticipants(req, res);

        expect(res.send).toHaveBeenCalledWith(
          participants.map((p) => p.toJSON())
        );
        expect(res.status).not.toHaveBeenCalled();
      });

      test("should handle errors and return status 500", async () => {
        const error = new Error("Failed to retrieve participants");
        Participant.findAll = jest.fn(() => Promise.reject(error));
        const req = {};
        const res = { status: jest.fn(() => res), send: jest.fn() };

        await participantController.getAllParticipants(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith({
          error: "Error in participantController - getAllParticipants",
        });
      });
    });
  });
});
