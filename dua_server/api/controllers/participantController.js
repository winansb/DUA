const Participant = require("../models/Participant");

const participantController = {
  // Method to create a new participant entry
  createParticipant: async (req, res) => {
    try {
      const { PARTICIPANT_NAME, ONGOING_TEST } = req.body;

      const participant = await Participant.create({
        PARTICIPANT_NAME,
        DETOUR_COMPLETE: false,
        BREAKDOWN_COMPLETE: false,
        DETOUR_IN_PROGRESS: 0,
        BREAKDOWN_IN_PROGRESS: 0,
        ONGOING_TEST,
      });

      res.status(201).json(participant);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Error in participantController - createParticipant" });
    }
  },

  updateParticipant: async (req, res) => {
    try {
      const uid = req.params.uid;
      const updatedParticipant = req.body;

      const result = await Participant.update(updatedParticipant, {
        where: { uid: uid },
      });

      if (result[0] === 0) {
        return res.status(404).json({
          message:
            "ParticipantController - updateParticipant: Participant not found",
        });
      }
      return res.status(200).json({
        message:
          "ParticipantController - updateParticipant: Participant updated successfully",
      });
    } catch (error) {
      console.error("Error updating participant:", error);
      return res.status(500).json({
        message:
          "ParticipantController - updateParticipant: Error updating participant",
      });
    }
  },

  // Method to retrieve a participant entry by UID
  getParticipant: async (req, res) => {
    const { uid } = req.params;

    try {
      const participant = await Participant.findByPk(uid);

      if (!participant) {
        return res.status(404).send({
          error:
            "ParticipantController - getParticipantById: Participant not found",
        });
      }

      return res.send(participant.toJSON());
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ error: "Error in participantController - getParticipantById" });
    }
  },
  // Method to retrieve all participants as an array of JSON objects
  getAllParticipants: async (req, res) => {
    try {
      const participants = await Participant.findAll();
      return res.send(participants.map((participant) => participant.toJSON()));
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ error: "Error in participantController - getAllParticipants" });
    }
  },
  // Method to delete a participant entry by UID
  deleteParticipant: async (req, res) => {
    const { uid } = req.params;

    try {
      const deletedRowsCount = await Participant.destroy({
        where: { UID: uid },
      });

      if (deletedRowsCount === 0) {
        return res.status(404).send({
          error:
            "ParticipantController - deleteParticipant: Participant not found",
        });
      }

      return res.send({ message: "Participant deleted successfully" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ error: "Error in participantController - deleteParticipant" });
    }
  },
};

module.exports = participantController;
