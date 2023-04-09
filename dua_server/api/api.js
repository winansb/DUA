const express = require('express');
const router = express.Router();

// conrtoller imports 
const participantController = require('./controllers/participantController');
const screenController = require('./controllers/screenController');
const tapController = require('./controllers/tapController');
const testController = require('./controllers/testController');

/*----------     Participant routes     ----------*/

// Create a new participant 
router.post('/participant', participantController.createParticipant);
// Update a participant 
router.put('/participant/:uid', participantController.updateParticipant);
// Retrieve a participant entry by UID
router.get('/participant/:uid', participantController.getParticipant);
// Retrieve all participants as an array of JSON objects
router.get('/participant', participantController.getAllParticipants);
// Delete a participant entry by UID
router.delete('/participant/:uid', participantController.deleteParticipant);


/*-----------------------------------------------*/

/*----------     Screen routes     ----------*/

// Creating a new screen
router.post('/screen', screenController.createScreen);
// Finishing a screen upon exit
router.put('/screen/:uid', screenController.finishScreen);
// Getting a specific screen
router.get('/screen/:uid', screenController.getScreen);

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
// Getting a specific test
router.get('/test/:uid', testController.getTest);

/*-----------------------------------------------*/

module.exports = router;