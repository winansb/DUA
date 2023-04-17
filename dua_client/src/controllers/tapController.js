import axios from "axios";
import { API_ROUTES } from "../apiRoutes";

export const tapController = {
  createTap: async (tapData) => {
    try {
      const response = await axios.post(API_ROUTES.CREATE_TAP, tapData);
      return response.data;
    } catch (error) {
      console.error("tapController - createTap: Error creating tap:", error);
      throw error;
    }
  },

  getTap: async () => {
    try {
      const response = await axios.get(API_ROUTES.GET_TAP);
      return response.data;
    } catch (error) {
      console.error(`tapController - getTap: Error getting tap: `, error);
      throw error;
    }
  },
  updateTap: async (uid, tapData) => {
    try {
      const response = await axios.put(API_ROUTES.UPDATE_TAP(uid), tapData);
      return response.data;
    } catch (error) {
      console.error(
        `tapController - updateTap: Error updating tap ${uid}:`,
        error
      );
      throw error;
    }
  },
};
