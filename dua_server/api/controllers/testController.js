const Test = require("../models/Test");

const testController = {
  //method to create new test
  createTest: async (req, res) => {
    try {
      const {
        PARTICIPANT_ID,
        MCI,
        ORDER,
        USE_PLAYBOOK,
        EMERGENCY_CONTACT_BREAKDOWN,
        ROADSIDE_ASSISTANCE,
        RELAXING_MUSIC,
        NEXT_DESTINATION,
        GO_HOME,
        EMERGENCY_CONTACT_DETOUR,
      } = req.body;

      // Check for required fields
      if (
        PARTICIPANT_ID === undefined ||
        MCI === undefined ||
        ORDER === undefined ||
        USE_PLAYBOOK === undefined ||
        EMERGENCY_CONTACT_BREAKDOWN === undefined ||
        ROADSIDE_ASSISTANCE === undefined ||
        RELAXING_MUSIC === undefined ||
        NEXT_DESTINATION === undefined ||
        GO_HOME === undefined ||
        EMERGENCY_CONTACT_DETOUR === undefined
      ) {
        return res.status(400).json({
          error:
            "Error in testController - createTest: Required fields are missing",
        });
      }

      const test = await Test.create({
        PARTICIPANT_ID,
        MCI,
        ORDER,
        USE_PLAYBOOK,
        EMERGENCY_CONTACT_BREAKDOWN,
        ROADSIDE_ASSISTANCE,
        RELAXING_MUSIC,
        NEXT_DESTINATION,
        GO_HOME,
        EMERGENCY_CONTACT_DETOUR,
      });

      return res.status(201).json(test);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Error in testController - createTest" });
    }
  },
  //method to udate all aspects of a test
  updateTest: async (req, res) => {
    try {
      const uid = req.params.uid;
      const updatedTest = req.body;
      const result = await Test.update(updatedTest, {
        where: { uid: uid },
      });

      if (result[0] === 0) {
        return res
          .status(404)
          .send({ error: "TestController - updateTest: Test not found" });
      }

      return res.status(200).json({
        message: "testController - updateTest: Test updated successfully",
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ error: "Error in testController - updateTest" });
    }
  },
  //method to get test back based on UID
  getTest: async (req, res) => {
    const { uid } = req.params;
    try {
      const test = await Test.findByPk(uid);

      if (!test) {
        return res.status(404).json({
          success: false,
          message: "testController - getTest: Test not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Test retrieved successfully",
        data: test,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Error in testController - getTest: Failed to retrieve test",
        error: err.message,
      });
    }
  },
};

module.exports = testController;
