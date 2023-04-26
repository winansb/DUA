# Creating Unit Tests

This guide will help you understand how to create unit tests for your project using Jest. The example provided is based on testing a controller for a hypothetical `Test` model.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/): Install Jest as a devDependency using `npm install --save-dev jest`

## Test Structure

1. Start by importing the required modules and the controller you want to test:

   ```javascript
   const Test = require("../../models/Test");
   const testController = require("../../controllers/testController");

2. Use 'describe' blocks to group your tests based on the functionality being tested. Each block should contai a description of the functionality it covers. 

```javascript
describe("testController", () => {
  // Test cases for each functionality
});
```

3. Inside the 'describe' blocks, create test cases using the 'it' function. Each test case should have a description of the expected outcome. 

```javascript 
it("should create a new test", async () => {
  // Test implementation
});
```

4. For each test case, define the necessary input, mocks, and expected outputs. Use the Jest spyOn function to mock calls to model methods like create, update, and findByPk. Make sure to restore the mocks after each test.

```javascript
const mockCreate = jest.spyOn(Test, "create").mockResolvedValueOnce(test);
// Test implementation
mockCreate.mockRestore();
```

5. Use expect to check if the expected output matches the actual output of the function being tested.

```javascript
expect(res.status).toHaveBeenCalledWith(201);
expect(res.json).toHaveBeenCalledWith(test);
```