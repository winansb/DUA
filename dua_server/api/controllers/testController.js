const Test = require('../models/Test');

const testController = {    
    //method to create new test
    createTest: async (req, res) => {
        try {
          const {
            MCI,
            ORDER,
            BREAKDOWN_TEST_ID,
            DETOUR_TEST_ID,
            USE_PLAYBOOK,
            BREAKDOWN_OPTION_1,
            BREAKDOWN_OPTION_2,
            BREAKDOWN_OPTION_3,
            DETOUR_OPTION_1,
            DETOUR_OPTION_2,
            DETOUR_OPTION_3,
          } = req.body;
      
          // Check for required fields
          if (MCI === undefined || 
            ORDER === undefined || 
            USE_PLAYBOOK === undefined ||
            BREAKDOWN_OPTION_1 === undefined ||
            BREAKDOWN_OPTION_2 === undefined ||
            BREAKDOWN_OPTION_3 === undefined ||
            DETOUR_OPTION_1 === undefined ||
            DETOUR_OPTION_2 === undefined ||
            DETOUR_OPTION_3 === undefined 
            ) {
            return res.status(400).json({ error: 'Error in testController - createTest: Required fields are missing' });
          }
      
          const test = await Test.create({
            MCI,
            ORDER,
            BREAKDOWN_TEST_ID: BREAKDOWN_TEST_ID || null,
            DETOUR_TEST_ID: DETOUR_TEST_ID || null,
            USE_PLAYBOOK,
            BREAKDOWN_OPTION_1: BREAKDOWN_OPTION_1 || null,
            BREAKDOWN_OPTION_2: BREAKDOWN_OPTION_2 || null,
            BREAKDOWN_OPTION_3: BREAKDOWN_OPTION_3 || null,
            DETOUR_OPTION_1: DETOUR_OPTION_1 || null,
            DETOUR_OPTION_2: DETOUR_OPTION_2 || null,
            DETOUR_OPTION_3: DETOUR_OPTION_3 || null,
          });
      
          res.status(201).json(test);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error in testController - createTest' });
        }
      },
    //method to udate all aspects of a test
    updateTest : async (req, res) => {
        const { uid } = req.params;
        try {
            const [updatedRowsCount, updatedRows] = await Test.update(req.body, {
            where: { UID: uid },
            returning: true,
            });

            if (updatedRowsCount === 0) {
            return res.status(404).send({ error: 'TestController - updateTest: Test not found' });
            }

            return res.send(updatedRows[0].toJSON());
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'Error in testController - updateTest' });
        }
    },
    //method to get test back based on UID
    getTest: async (req, res) => {
        try {
            const test = await Test.findByPk(req.params.id);
    
            if (!test) {
                return res.status(404).json({
                    success: false,
                    message: 'testController - getTest: Test not found',
                });
            }
    
            res.status(200).json({
            success: true,
            message: 'Test retrieved successfully',
            data: test,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
            success: false,
            message: 'Error in testController - getTest: Failed to retrieve test',
            error: err.message,
            });
        }
    }
};

module.exports = testController;