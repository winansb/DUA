const express = require('express');
const router = express.Router();

// conrtoller imports 
const participantController = require('./controllers/participantController');
const screenController = require('./controllers/screenController');
const tapController = require('./controllers/tapController');
const testController = require('./controllers/testController');

/*----------     Participant routes     ----------*/

// Route to create a new participant entry
router.post('/participants', participantController.createParticipant);
// Route to update DETOUR_COMPLETE
router.put('/participants/:uid/detourComplete', participantController.updateDetourComplete);
// Route to update BREAKDOWN_COMPLETE
router.put('/participants/:uid/breakdownComplete', participantController.updateBreakdownComplete);
// Route to update TEST_IN_PROGRESS
router.put('/participants/:uid/testInProgress', participantController.updateTestInProgress);
// Route to retrieve a participant entry by UID
router.get('/participants/:uid', participantController.getParticipant);

/*-----------------------------------------------*/

/*----------     Screen routes     ----------*/

// Route for creating a new screen
router.post('/screens', screenController.createScreen);
// Route for finishing a screen upon exit
router.put('/screens/:uid', screenController.finishScreen);
// Route for getting a specific screen
router.get('/screens/:uid', screenController.getScreen);

/*-----------------------------------------------*/

/*----------     Tap routes     ----------*/

// Route for creating a tap entry
router.post('/tap', tapController.createTap);
// Route for getting a tap entry
router.get('/tap/:uid', tapController.getTap);

/*-----------------------------------------------*/

/*----------     Test routes     ----------*/

// Route for creating new test entry
router.post('/test', testController.createTest);
// Route for updating entire test entry
router.put('/test/:uid', testController.updateTest);
// Route for updating test BREAKDOWN_TEST_ID
router.put('/test/breakdown/:uid', testController.updateBreakdownTestId);
// Route for updating test DETOUR_TEST_ID
router.put('/test/detour/:uid', testController.updateDetourTestId);
// Route for getting a specific test
router.get('/test/:uid', testController.getTest);

/*-----------------------------------------------*/

module.exports = router;