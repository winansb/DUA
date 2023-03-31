const BASE_URL = 'http://localhost:8000';

export const API_ROUTES = {
    // Participants routes
    CREATE_PARTICIPANT: `${BASE_URL}/participants`,
    UPDATE_DETOUR_COMPLETE: (uid) => `${BASE_URL}/participants/${uid}/detourComplete`,
    UPDATE_BREAKDOWN_COMPLETE: (uid) => `${BASE_URL}/participants/${uid}/breakdownComplete`,
    UPDATE_TEST_IN_PROGRESS: (uid) => `${BASE_URL}/participants/${uid}/testInProgress`,
    GET_PARTICIPANT: (uid) => `${BASE_URL}/participants/${uid}`,
    GET_ALL_PARTICIPANTS: `${BASE_URL}/participants`,
  
    // Screen routes
    CREATE_SCREEN: `${BASE_URL}/screens`,
    FINISH_SCREEN: (uid) => `${BASE_URL}/screens/${uid}`,
    GET_SCREEN: (uid) => `${BASE_URL}/screens/${uid}`,
  
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