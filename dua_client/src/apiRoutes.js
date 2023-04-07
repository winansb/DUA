const BASE_URL = 'http://localhost:8000/api';

export const API_ROUTES = {
    // Participants routes
    CREATE_PARTICIPANT: `${BASE_URL}/participant`,
    UPDATE_DETOUR_COMPLETE: (uid) => `${BASE_URL}/participant/${uid}/detourComplete`,
    UPDATE_BREAKDOWN_COMPLETE: (uid) => `${BASE_URL}/participant/${uid}/breakdownComplete`,
    UPDATE_DETOUR_IN_PROGRESS: (uid) => `${BASE_URL}/participant/${uid}/detourInProgress`,
    UPDATE_BREAKDOWN_IN_PROGRESS: (uid) => `${BASE_URL}/participant/${uid}/breakdownInProgress`,
    GET_PARTICIPANT: (uid) => `${BASE_URL}/participant/${uid}`,
    GET_ALL_PARTICIPANTS: `${BASE_URL}/participant`,
  
    // Screen routes
    CREATE_SCREEN: `${BASE_URL}/screen`,
    FINISH_SCREEN: (uid) => `${BASE_URL}/screen/${uid}`,
    GET_SCREEN: (uid) => `${BASE_URL}/screen/${uid}`,
  
    // Tap routes
    CREATE_TAP: `${BASE_URL}/tap`,
    GET_TAP: (uid) => `${BASE_URL}/tap/${uid}`,
  
    // Test routes
    CREATE_TEST: `${BASE_URL}/test`,
    UPDATE_TEST: (uid) => `${BASE_URL}/test/${uid}`,
    UPDATE_BREAKDOWN_TEST_ID: (uid) => `${BASE_URL}/test/breakdown/${uid}`,
    UPDATE_DETOUR_TEST_ID: (uid) => `${BASE_URL}/test/detour/${uid}`,
    GET_TEST: (uid) => `${BASE_URL}/test/${uid}`,
  };