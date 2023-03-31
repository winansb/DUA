const express = require('express');
const router = express.Router();

// conrtoller imports 
const participantController = require('./controllers/participantController');
const screenController = require('./controllers/screenController');
const tapController = require('./controllers/tapController');
const testController = require('./controllers/testController');

/*----------     Participant routes     ----------*/

// Create a new participant 
router.post('/participants', participantController.createParticipant);
// Update DETOUR_COMPLETE
router.put('/participants/:uid/detourComplete', participantController.updateDetourComplete);
// Update BREAKDOWN_COMPLETE
router.put('/participants/:uid/breakdownComplete', participantController.updateBreakdownComplete);
// Update TEST_IN_PROGRESS
router.put('/participants/:uid/testInProgress', participantController.updateTestInProgress);
// Retrieve a participant entry by UID
router.get('/participants/:uid', participantController.getParticipant);
// Retrieve all participants as an array of JSON objects
router.get('/participants', participantController.getAllParticipants);


/*-----------------------------------------------*/

/*----------     Screen routes     ----------*/

// Creating a new screen
router.post('/screens', screenController.createScreen);
// Finishing a screen upon exit
router.put('/screens/:uid', screenController.finishScreen);
// Getting a specific screen
router.get('/screens/:uid', screenController.getScreen);

/*-----------------------------------------------*/

/*----------     Tap routes     ----------*/

// Create a tap in the db
router.post('/tap', tapController.createTap);
// Getting a tap 
router.get('/tap/:uid', tapController.getTap);

/*-----------------------------------------------*/

/*----------     Test routes     ----------*/

// Creating new test entry
router.post('/test', testController.createTest);
// Updating entire test entry
router.put('/test/:uid', testController.updateTest);
// Updating test BREAKDOWN_TEST_ID
router.put('/test/breakdown/:uid', testController.updateBreakdownTestId);
// Updating test DETOUR_TEST_ID
router.put('/test/detour/:uid', testController.updateDetourTestId);
// Getting a specific test
router.get('/test/:uid', testController.getTest);

/*-----------------------------------------------*/

module.exports = router;