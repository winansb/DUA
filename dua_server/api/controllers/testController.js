const Test = require('../models/Test');

const testController = {    
    //method to create new test
    createTest : async (req, res) => {
        try {
            const { 
            MCI, 
            ORDER, 
            BREAKDOWN_TEST_ID, 
            DETOUR_TEST_ID, 
            USE_PLAYBOOK 
            } = req.body;

            const test = await Test.create({
            MCI,
            ORDER,
            BREAKDOWN_TEST_ID: BREAKDOWN_TEST_ID || null,
            DETOUR_TEST_ID: DETOUR_TEST_ID || null,
            USE_PLAYBOOK,
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
    //method to assign Breakdown_Test_ID to a test entry once started
    updateBreakdownTestId: async (req, res) => {
        const { uid } = req.params;
        const { breakdownTestId } = req.body;

        try {
            const [updatedRowsCount, updatedRows] = await Test.update(
            { BREAKDOWN_TEST_ID: breakdownTestId },
            { where: { UID: uid }, returning: true }
            );

            if (updatedRowsCount === 0) {
            return res.status(404).send({ error: 'TestController - updateBreakdownTestId: Test not found' });
            }

            return res.send(updatedRows[0].toJSON());
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'Error in testController - updateBreakdownTestId' });
        }
    },
    //method to assign Detour_Test_ID to a test entry once started
    updateDetourTestId: async (req, res) => {
        const { uid } = req.params;
        const { detourTestId } = req.body;

        try {
            const [updatedRowsCount, updatedRows] = await Test.update(
            { DETOUR_TEST_ID: detourTestId },
            { where: { UID: uid }, returning: true }
            );

            if (updatedRowsCount === 0) {
            return res.status(404).send({ error: 'testController - updateDetourTestId: Test not found' });
            }

            return res.send(updatedRows[0].toJSON());
        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'Error in TestController - updateDetourTestId' });
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