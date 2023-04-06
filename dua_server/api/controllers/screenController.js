const Screen = require('../models/Screen');

const screenController = {
    createScreen: async (req, res) => {
        try {
            const { 
            SCREEN_NUMBER_IN_ORDER, 
            LOCAL_TIME_AT_START, 
            TRIAL_RUNTIME_AT_START_SECONDS, 
            SCREEN_NAME, 
            TRIAL_ID, 
            VIDEO_PLAYING, 
            VIDEO_TIME_AT_START_SECONDS 
            } = req.body;

            const newScreen = await Screen.create({ 
            SCREEN_NUMBER_IN_ORDER, 
            LOCAL_TIME_AT_START, 
            TRIAL_RUNTIME_AT_START_SECONDS, 
            SCREEN_NAME, 
            TRIAL_ID, 
            VIDEO_PLAYING, 
            VIDEO_TIME_AT_START_SECONDS 
            });
            res.status(201).json(newScreen);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error in screenController - createScreen: failed to make new screen' });
        }
    },

    finishScreen: async (req, res) => {
        const { uid } = req.params;
        const { 
            SCREEN_DURATION_SECONDS, 
            EXIT_METHOD, 
            VIDEO_TIME_AT_END 
        } = req.body;

        try {
            const [updatedRowsCount, updatedRows] = await Screen.update(
            {
                SCREEN_DURATION_SECONDS,
                EXIT_METHOD,
                VIDEO_TIME_AT_END,
            },
            {
                where: { UID: uid },
                returning: true,
            }
            );

            if (updatedRowsCount === 0) {
            return res.status(404).send({ error: 'ScreenController - finishScreen: Screen not found' });
            }

            return res.send(updatedRows[0].toJSON());
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'Error in screenController - finishScreen' });
        }
    },

    getScreen: async (req, res) => {
        try {
            const { uid } = req.params;

            const screen = await Screen.findOne({
            where: { UID: uid },
            });

            if (!screen) {
            return res.status(404).send({ error: 'ScreenController - getScreen: Screen not found' });
            }

            return res.send(screen.toJSON());
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'Error in screenController - getScreen' });
        }
    },
};

module.exports = screenController;