import axios from "axios";
import { API_ROUTES } from "../apiRoutes";

export const testController = {
  createTest: async (testData) => {
    try {
      const response = await axios.post(API_ROUTES.CREATE_TEST, testData);
      return response.data;
    } catch (error) {
      console.error(
        "testController - createTest : Error creating test:",
        error
      );
      throw error;
    }
  },

  updateTest: async (uid, data) => {
    try {
      const response = await axios.put(API_ROUTES.UPDATE_TEST(uid), data);
      return response.data;
    } catch (error) {
      console.error(
        `testController - updateTest :Error updating test ${uid}:`,
        error
      );
      throw error;
    }
  },

  getTest: async (uid) => {
    try {
      const response = await axios.get(API_ROUTES.GET_TEST(uid));
      return response.data;
    } catch (error) {
      console.error(
        `testController - getTest :Error getting test ${uid}:`,
        error
      );
      throw error;
    }
  },
};
