const Screen = require("../models/Screen");

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
        VIDEO_TIME_AT_START_SECONDS,
      } = req.body;

      const newScreen = await Screen.create({
        SCREEN_NUMBER_IN_ORDER: SCREEN_NUMBER_IN_ORDER,
        LOCAL_TIME_AT_START: LOCAL_TIME_AT_START,
        TRIAL_RUNTIME_AT_START_SECONDS: TRIAL_RUNTIME_AT_START_SECONDS,
        SCREEN_NAME: SCREEN_NAME,
        TRIAL_ID: TRIAL_ID,
        VIDEO_PLAYING: VIDEO_PLAYING,
        VIDEO_TIME_AT_START_SECONDS: VIDEO_TIME_AT_START_SECONDS,
      });
      res.status(201).json({
        success: true,
        message: "New tap created successfully",
        data: newScreen,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        error:
          "Error in screenController - createScreen: failed to make new screen",
      });
    }
  },

  finishScreen: async (req, res) => {
    try {
      const uid = req.params.uid;
      const updatedScreen = {
        SCREEN_DURATION_SECONDS: req.body.SCREEN_DURATION_SECONDS,
        EXIT_METHOD: req.body.EXIT_METHOD,
        VIDEO_TIME_AT_END: req.body.VIDEO_TIME_AT_END,
      };

      console.log("Updated screen:", updatedScreen);
      console.log("UID:", uid);
      console.log("body:", req.body);
      const result = await Screen.update(updatedScreen, {
        where: { UID: uid },
      });

      if (result[0] === 0) {
        return res.status(404).json({
          message:
            "ScreenController - finishScreen: Screen not found",
        });
      }
      return res.status(200).json({
        message:
          "ScreenController - finishScreen: Screen updated successfully",
      });
    } catch (error) {
      console.error("Error updating screen:", error);
      return res.status(500).json({
        message:
          "ScreenController - finishScreen: Error updating screen",
      });
    }
  },
  

  getScreen: async (req, res) => {
    try {
      const { uid } = req.params;

      const screen = await Screen.findOne({
        where: { UID: uid },
      });

      if (!screen) {
        return res
          .status(404)
          .send({ error: "ScreenController - getScreen: Screen not found" });
      }

      return res.send(screen.toJSON());
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ error: "Error in screenController - getScreen" });
    }
  },
};

module.exports = screenController;
