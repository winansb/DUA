const PROTOCOL = process.env.REACT_APP_PROTOCOL || "http";
const PORT = process.env.REACT_APP_PORT || "8000";

const BASE_URL = `${PROTOCOL}://localhost:${PORT}/api`;

export const API_ROUTES = {
  // Participants routes
  CREATE_PARTICIPANT: `${BASE_URL}/participant`,
  UPDATE_PARTICIPANT: (uid) => `${BASE_URL}/participant/${uid}`,
  UPDATE_DETOUR_COMPLETE: (uid) => `${BASE_URL}/participant/${uid}`,
  GET_PARTICIPANT: (uid) => `${BASE_URL}/participant/${uid}`,
  GET_ALL_PARTICIPANTS: `${BASE_URL}/participant`,
  DELETE_PARTICIPANT: (uid) => `${BASE_URL}/participant/${uid}`,

  // Screen routes
  CREATE_SCREEN: `${BASE_URL}/screen`,
  FINISH_SCREEN: (uid) => `${BASE_URL}/screen/${uid}`,
  GET_SCREEN: (uid) => `${BASE_URL}/screen/${uid}`,

  // Tap routes
  CREATE_TAP: `${BASE_URL}/tap`,
  GET_TAP: `${BASE_URL}/tap`,
  UPDATE_TAP: (uid) => `${BASE_URL}/tap/${uid}`,

  // Test routes
  CREATE_TEST: `${BASE_URL}/test`,
  UPDATE_TEST: (uid) => `${BASE_URL}/test/${uid}`,
  GET_TEST: (uid) => `${BASE_URL}/test/${uid}`,
};
