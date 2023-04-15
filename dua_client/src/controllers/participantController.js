import axios from "axios";
import { API_ROUTES } from "../apiRoutes";

export const participantController = {
  createParticipant: async (participantData) => {
    try {
      const response = await axios.post(
        API_ROUTES.CREATE_PARTICIPANT,
        participantData
      );
      return response.data;
    } catch (error) {
      console.error(
        "participantController - createParticipant: Error creating Participant",
        error
      );
      throw error;
    }
  },

  updateParticipant: async (uid, updatedParticipant) => {
    try {
      const response = await axios.put(
        API_ROUTES.UPDATE_PARTICIPANT(uid),
        updatedParticipant
      );
      return response.data;
    } catch (error) {
      console.error(
        "participantController - updateParticipant: Error updating participant record",
        error
      );
      throw error;
    }
  },

  getParticipant: async (uid) => {
    try {
      const response = await axios.get(API_ROUTES.GET_PARTICIPANT(uid));
      return response.data;
    } catch (error) {
      console.error(
        "participantController - getParticipant: Error getting participant",
        error
      );
      throw error;
    }
  },
  getAllParticipants: async () => {
    try {
      const response = await axios.get(API_ROUTES.GET_ALL_PARTICIPANTS);
      return response.data;
    } catch (error) {
      console.error(
        "participantController - getAllParticipants: Error getting all participants",
        error
      );
      throw error;
    }
  },
  deleteParticipant: async (uid) => {
    try {
      const response = await axios.delete(API_ROUTES.DELETE_PARTICIPANT(uid));
      return response.data;
    } catch (error) {
      console.error(
        "participantController - deleteParticipant: Error deleting participant",
        error
      );
      throw error;
    }
  },
};
