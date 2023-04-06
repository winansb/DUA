const Participant = require('../models/Participant');

const participantController = {

    // Method to create a new participant entry
    createParticipant: async (req, res) => {
        try {
            const { PARTICIPANT_NAME } = req.body;

            const participant = await Participant.create({
                PARTICIPANT_NAME,
                DETOUR_COMPLETE: false,
                BREAKDOWN_COMPLETE: false,
                DETOUR_IN_PROGRESS: 0,
                BREAKDOWN_IN_PROGRESS: 0,
            });

            res.status(201).json(participant);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error in participantController - createParticipant' });
        }
    },

        // Method to update DETOUR_COMPLETE
    updateDetourComplete: async (req, res) => {
        const { uid } = req.params;

        try {
            const [updatedRowsCount, updatedRows] = await Participant.update(
                { DETOUR_COMPLETE: true },
                { where: { UID: uid }, returning: true }
            );

            if (updatedRowsCount === 0) {
                return res.status(404).send({ error: 'ParticipantController - updateDetourComplete: Participant not found' });
            }

            return res.send(updatedRows[0].toJSON());
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'Error in participantController - updateDetourComplete' });
            }
        },

    // Method to update BREAKDOWN_COMPLETE
    updateBreakdownComplete: async (req, res) => {
        const { uid } = req.params;

        try {
            const [updatedRowsCount, updatedRows] = await Participant.update(
                { BREAKDOWN_COMPLETE: true },
                { where: { UID: uid }, returning: true }
            );

            if (updatedRowsCount === 0) {
                return res.status(404).send({ error: 'ParticipantController - updateBreakdownComplete: Participant not found' });
            }

            return res.send(updatedRows[0].toJSON());
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'Error in participantController - updateBreakdownComplete' });
            }
        },

    // Method to update BREAKDOWN_IN_PROGRESS
    updateBreakdownInProgress: async (req, res) => {
        const { uid } = req.params;
        const { breakdownInProgress } = req.body;
    
        try {
            const [updatedRowsCount, updatedRows] = await Participant.update(
            { BREAKDOWN_IN_PROGRESS: breakdownInProgress },
            { where: { UID: uid }, returning: true }
            );
    
            if (updatedRowsCount === 0) {
                return res.status(404).send({ error: 'ParticipantController - updateBreakdownInProgress: Participant not found' });
            }
    
            return res.send(updatedRows[0].toJSON());
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'Error in participantController - updateBreakdownInProgress' });
        }
    },
    
    // Method to update DETOUR_IN_PROGRESS
    updateDetourInProgress: async (req, res) => {
        const { uid } = req.params;
        const { detourInProgress } = req.body;
    
        try {
            const [updatedRowsCount, updatedRows] = await Participant.update(
            { DETOUR_IN_PROGRESS: detourInProgress },
            { where: { UID: uid }, returning: true }
        );
    
        if (updatedRowsCount === 0) {
            return res.status(404).send({ error: 'ParticipantController - updateDetourInProgress: Participant not found' });
        }
    
            return res.send(updatedRows[0].toJSON());
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'Error in participantController - updateDetourInProgress' });
        }
    },

    // Method to retrieve a participant entry by UID
    getParticipant: async (req, res) => {
        const { uid } = req.params;

        try {
            const participant = await Participant.findByPk(uid);

        if (!participant) {
            return res.status(404).send({ error: 'ParticipantController - getParticipantById: Participant not found' });
        }

            return res.send(participant.toJSON());
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'Error in participantController - getParticipantById' });
        }
    },
    // Method to retrieve all participants as an array of JSON objects
    getAllParticipants: async (req, res) => {
        try {
            const participants = await Participant.findAll();
            return res.send(participants.map(participant => participant.toJSON()));
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'Error in participantController - getAllParticipants' });
        }
    }
};

module.exports = participantController; 