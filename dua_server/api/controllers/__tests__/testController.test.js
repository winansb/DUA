const Test = require('../../models/Test');
const testController = require('../../controllers/testController');

describe('testController', () => {
    // Create Test
    describe('createTest', () => {
        it('should create a new test', async () => {
            const test = await Test.create({
                MCI: 'Test MCI',
                ORDER: 1,
                BREAKDOWN_TEST_ID: 1,
                DETOUR_TEST_ID: 2,
                USE_PLAYBOOK: 'Test Playbook'
            });
            const mockCreate = jest.spyOn(Test, 'create').mockResolvedValueOnce(test);

            const req = { body: test };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis()
            };
            await testController.createTest(req, res);

            expect(mockCreate).toHaveBeenCalledTimes(1);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(test);

            mockCreate.mockRestore();
        });

        it('should return an error if there is a server error', async () => {
            const mockCreate = jest.spyOn(Test, 'create').mockRejectedValueOnce(new Error('Test error'));

            const req = { body: {} };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis()
            };
            await testController.createTest(req, res);

            expect(mockCreate).toHaveBeenCalledTimes(1);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: 'Error in testController - createTest' });

            mockCreate.mockRestore();
        });
    });

    // Update Test
    describe('updateTest', () => {
        let testUID;

        beforeAll(async () => {
            // Create a test to update
            const test = await Test.create({
                MCI: 'Test MCI',
                ORDER: 1,
                BREAKDOWN_TEST_ID: 1,
                DETOUR_TEST_ID: 2,
                USE_PLAYBOOK: 'Test Playbook'
            });
            testUID = test.UID;
        });

        afterAll(async () => {
            // Cleanup
            await Test.destroy({ where: { UID: testUID } });
        });
            // TODO: 
        // it('should update an existing test', async () => {
        //     const updatedData = {
        //         MCI: 'Updated MCI',
        //         ORDER: 2,
        //         BREAKDOWN_TEST_ID: 1,
        //         DETOUR_TEST_ID: 2,
        //         USE_PLAYBOOK: 'Updated Playbook'
        //     };
        //     jest.spyOn(Test, 'update').mockResolvedValueOnce([1, [updatedData]]);

        //     const req = { params: { uid: testUID }, body: updatedData };
        //     const res = {
        //         status: jest.fn().mockReturnThis(),
        //         send: jest.fn().mockReturnThis()
        //     };
        //     await testController.updateTest(req, res);

        //     expect(res.status).toHaveBeenCalledWith(200);
        //     expect(res.send).toHaveBeenCalledWith(updatedData);
        // });

        it('should return an error if the test is not found', async () => {
            jest.spyOn(Test, 'update').mockResolvedValueOnce([0, []]);

            const req = { params: { uid: testUID + 1 }, body: {} };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn().mockReturnThis()
            };
            await testController.updateTest(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.send).toHaveBeenCalledWith({ error: 'TestController - updateTest: Test not found' });
        });

        it('should return an error if there is a server error', async () => {
            jest.spyOn(Test, 'update').mockRejectedValueOnce(new Error('Test error'));

            const req = { params: { uid: testUID }, body: {} };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn().mockReturnThis()
            };
            await testController.updateTest(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).toHaveBeenCalledWith({ error: 'Error in testController - updateTest' });
        });
    });

    // Update Breakdown Test ID
    describe('updateBreakdownTestId', () => {
        let testUID;

        beforeAll(async () => {
            // Create a test to update
            const test = await Test.create({
                MCI: 'Test MCI',
                ORDER: 1,
                BREAKDOWN_TEST_ID: 1,
                DETOUR_TEST_ID: 2,
                USE_PLAYBOOK: 'Test Playbook'
            });
            testUID = test.UID;
        });

        afterAll(async () => {
            // Cleanup
            await Test.destroy({ where: { UID: testUID } });
        });
            // TODO: 
        // it('should update the Breakdown_Test_ID of an existing test', async () => {
        //     const updatedData = { BREAKDOWN_TEST_ID: 5 };
        //     jest.spyOn(Test, 'update').mockResolvedValueOnce([1, [updatedData]]);

        //     const req = {
        //         params: { uid: testUID },
        //         body: expect.objectContaining({
        //             BREAKDOWN_TEST_ID: 5,
        //         }),
        //       };
        //       const res = {
        //         status: jest.fn().mockReturnThis(),
        //         send: jest.fn().mockReturnThis(),
        //       };
        //     await testController.updateBreakdownTestId(req, res);

        //     expect(res.status).toHaveBeenCalledWith(200);
        //     expect(res.send).toHaveBeenCalledWith(updatedData);
        // });

        it('should return an error if the test is not found', async () => {
            jest.spyOn(Test, 'update').mockResolvedValueOnce([0, []]);

            const req = { params: { uid: testUID + 1 }, body: { breakdownTestId: 1 } };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn().mockReturnThis()
            };
            await testController.updateBreakdownTestId(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.send).toHaveBeenCalledWith({ error: 'TestController - updateBreakdownTestId: Test not found' });
        });

        it('should return an error if there is a server error', async () => {
            jest.spyOn(Test, 'update').mockRejectedValueOnce(new Error('Test error'));

            const req = { params: { uid: testUID }, body: { breakdownTestId: 1 } };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn().mockReturnThis()
            };
            await testController.updateBreakdownTestId(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).toHaveBeenCalledWith({ error: 'Error in testController - updateBreakdownTestId' });
        });
            // Update Detour Test ID
    describe('updateDetourTestId', () => {
        let testUID;

        beforeAll(async () => {
            // Create a test to update
            const test = await Test.create({
                MCI: 'Test MCI',
                ORDER: 1,
                BREAKDOWN_TEST_ID: 0,
                DETOUR_TEST_ID: 0,
                USE_PLAYBOOK: 'Test Playbook'
            });
            testUID = test.UID;
        });

        afterAll(async () => {
            // Cleanup
            await Test.destroy({ where: { uid: testUID } });
        });

                // TODO: 
        // it('should update the Detour_Test_ID of an existing test', async () => {
        //     const updatedData = { DETOUR_TEST_ID: 3 };
        //     const mockUpdate = jest.spyOn(Test, 'update').mockResolvedValueOnce([1, [updatedData]]);
          
        //     const req = {
        //       params: { uid: testUID },
        //       body: expect.objectContaining({
        //         DETOUR_TEST_ID: 3,
        //       }),
        //     };
        //     const res = {
        //       status: jest.fn().mockReturnThis(),
        //       send: jest.fn().mockReturnThis(),
        //     };
          
        //     await testController.updateDetourTestId(req, res);
          
        //     expect(mockUpdate).toHaveBeenCalledWith(
        //       expect.objectContaining({ DETOUR_TEST_ID: 3 }),
        //       { where: { UID: testUID }, returning: true }
        //     );
        //     expect(res.status).toHaveBeenCalledWith(200);
        //     expect(res.send).toHaveBeenCalledWith(updatedData);
        //   });

        it('should return an error if the test is not found', async () => {
            jest.spyOn(Test, 'update').mockResolvedValueOnce([0, []]);

            const req = { params: { uid: testUID + 1 }, body: { detourTestId: 2 } };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn().mockReturnThis()
            };
            await testController.updateDetourTestId(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.send).toHaveBeenCalledWith({ error: 'testController - updateDetourTestId: Test not found' });
        });

        it('should return an error if there is a server error', async () => {
            jest.spyOn(Test, 'update').mockRejectedValueOnce(new Error('Test error'));

            const req = { params: { uid: testUID }, body: { detourTestId: 2 } };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn().mockReturnThis()
            };
            await testController.updateDetourTestId(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).toHaveBeenCalledWith({ error: 'Error in TestController - updateDetourTestId' });
        });
    });

    // Get Test
    describe('getTest', () => {
        let testUID;

        beforeAll(async () => {
            // Create a test to retrieve
            const test = await Test.create({
                MCI: 'Test MCI',
                ORDER: 1,
                BREAKDOWN_TEST_ID: 1,
                DETOUR_TEST_ID: 2,
                USE_PLAYBOOK: 'Test Playbook'
            });
            testUID = test.UID;
        });

        afterAll(async () => {
            // Cleanup
            await Test.destroy({ where: { UID: testUID } });
        });

        it('should retrieve a test by UID', async () => {
            const testData = {
                UID: testUID,
                MCI: 'Test MCI',
                ORDER: 1,
                BREAKDOWN_TEST_ID: null,
                DETOUR_TEST_ID: null,
                USE_PLAYBOOK: 'Test Playbook'
            };
            const mockFindByPk = jest.spyOn(Test, 'findByPk').mockResolvedValueOnce(testData);

            const req = { params: { id: testUID } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis()
            };
            await testController.getTest(req, res);

            expect(mockFindByPk).toHaveBeenCalledTimes(1);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({
                success: true,
                message: 'Test retrieved successfully',
                data: testData
            });

            mockFindByPk.mockRestore();
        });

        it('should return an error if the test is not found', async () => {
            const mockFindByPk = jest.spyOn(Test, 'findByPk').mockResolvedValueOnce(null);

            const req = { params: { id: testUID + 1 } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis()
            };
            await testController.getTest(req, res);

            expect(mockFindByPk).toHaveBeenCalledTimes(1);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({
                success: false,
                message: 'testController - getTest: Test not found',
            });

            mockFindByPk.mockRestore();
        });

        it('should return an error if there is a server error', async () => {
            const mockFindByPk = jest.spyOn(Test, 'findByPk').mockRejectedValueOnce(new Error('Test error'));

            const req = { params: { id: testUID } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis()
            };
            await testController.getTest(req, res);

            expect(mockFindByPk).toHaveBeenCalledTimes(1);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({
                success: false,
                message: 'Error in testController - getTest: Failed to retrieve test',
                error: 'Test error'
            });

            mockFindByPk.mockRestore();
        });
    });
    });
});