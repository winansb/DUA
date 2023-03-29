const Tap = require('../models/Tap');

const tapController = {
// Method to create a new tap entry, taps are presses on the screen 
    createTap: async (req, res) => {
        try {
            const {
                trial_id,
                tap_on_screen_number,
                screen_name,
                screen_seq,
                trial_runtime_ms,
                press_start,
                press_end,
                press_duration_ms,
                action_initiated,
            } = req.body;

            const newTap = await Tap.create({
                TRIAL_ID: trial_id,
                TAP_ON_SCREEN_NUMBER: tap_on_screen_number,
                SCREEN_NAME: screen_name,
                SCREEN_SEQ: screen_seq,
                TRIAL_RUNTIME_MS: trial_runtime_ms,
                PRESS_START: press_start,
                PRESS_END: press_end,
                PRESS_DURATION_MS: press_duration_ms,
                ACTION_INITIATED: action_initiated,
            });

            res.status(201).json({
                success: true,
                message: 'New tap created successfully',
                data: newTap,
            });
            } catch (err) {
                console.error(err);
                res.status(500).json({
                success: false,
                message: 'Error in tapController - createTap: Failed to create new tap',
                error: err.message,
                });
        }
    },

    // Method to retrieve a tap by its id, taps will not be updated, only queried for saving a test in progress
    getTap: async (req, res) => {
        try {
            const tap = await Tap.findByPk(req.params.id);

            if (!tap) {
                return res.status(404).json({
                    success: false,
                    message: 'Tap not found',
                });
            }

            res.status(200).json({
            success: true,
            message: 'Tap retrieved successfully',
            data: tap,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
            success: false,
            message: 'Error in tapController - getTap: Failed to retrieve tap',
            error: err.message,
            });
        }
    },
};

module.exports = tapController;
