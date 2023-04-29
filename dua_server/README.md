# DUA Server

## Introduction
This is the server-side application for the DUA project. It provides an API for managing participants, screens, taps, and tests.

## Configuration
Create a `.env` file in the root of the `dua_server` folder with the following contents:
PORT=__desired port number__. If nothing is selected 
8000 is the default.


## API Endpoints

### Participant

- **Create a new participant**
  - Endpoint: `POST /api/participant`
  - Request body:
    - `PARTICIPANT_NAME`: string
    - `ONGOING_TEST`: integer
  - Response: JSON object representing the created participant

- **Update a participant**
  - Endpoint: `PUT /api/participant/:uid`
  - Request body: JSON object containing any of the following fields to update:
    - `PARTICIPANT_NAME`: string
    - `DETOUR_COMPLETE`: boolean
    - `BREAKDOWN_COMPLETE`: boolean
    - `DETOUR_IN_PROGRESS`: integer
    - `BREAKDOWN_IN_PROGRESS`: integer
    - `ONGOING_TEST`: integer
  - Response: JSON object containing a success message

- **Get a specific participant**
  - Endpoint: `GET /api/participant/:uid`
  - Response: JSON object representing the retrieved participant

- **Get all participants**
  - Endpoint: `GET /api/participants`
  - Response: JSON array representing all participants

- **Delete a participant**
  - Endpoint: `DELETE /api/participant/:uid`
  - Response: JSON object containing a success message

### Screen

- **Create a new screen**
  - Endpoint: `POST /api/screen`
  - Request body:
    - `SCREEN_NUMBER_IN_ORDER`: integer
    - `LOCAL_TIME_AT_START`: string
    - `TRIAL_RUNTIME_AT_START_SECONDS`: float
    - `SCREEN_NAME`: string
    - `TRIAL_ID`: string
    - `VIDEO_PLAYING`: string
    - `VIDEO_TIME_AT_START_SECONDS`: float
  - Response: JSON object representing the created screen

- **Finish a screen upon exit**
  - Endpoint: `PUT /api/screen/:uid`
  - Request body:
    - `SCREEN_DURATION_SECONDS`: float (optional)
    - `EXIT_METHOD`: string (optional)
    - `VIDEO_TIME_AT_END`: float (optional)
  - Response: JSON object representing the updated screen

- **Get a specific screen**
  - Endpoint: `GET /api/screen/:uid`
  - Response: JSON object representing the retrieved screen

### Tap

- **Create a new tap**
  - Endpoint: `POST /api/tap`
  - Request body:
    - `trial_id`: integer
    - `tap_on_screen_number`: integer
    - `screen_name`: string
    - `screen_seq`: string
    - `trial_runtime_ms`: integer
    - `press_start`: string
    - `press_end`: integer
    - `press_duration_ms`: integer
    - `action_initiated`: string (nullable)
    - `press_location_x_pixels`: integer
    - `press_location_y_pixels`: integer
  - Response: JSON object representing the created tap

- **Get the most recent tap**
  - Endpoint: `GET /api/tap`
  - Response: JSON object representing the most recent tap

- **Update a tap**
  - Endpoint: `PUT /api/tap/:uid`
  - Request body: JSON object containing any of the following fields to update:
    - `trial_id`: integer
    - `tap_on_screen_number`: integer
    - `screen_name`: string
    - `screen_seq`: string
    - `trial_runtime_ms`: integer
    - `press_start`: string
    - `press_end`: integer
    - `press_duration_ms`: integer
    - `action_initiated`: string (nullable)
    - `press_location_x_pixels`: integer
    - `press_location_y_pixels`: integer
  - Response: JSON object representing the updated tap

### Test

- **Create a new test**
  - Endpoint: `POST /api/test`
  - Request body:
    - `MCI`: string
    - `ORDER`: integer
    - `USE_PLAYBOOK`: string
    - `BREAKDOWN_OPTION_1`: string (nullable)
    - `BREAKDOWN_OPTION_2`: string (nullable)
    - `BREAKDOWN_OPTION_3`: string (nullable)
    - `DETOUR_OPTION_1`: string (nullable)
    - `DETOUR_OPTION_2`: string (nullable)
    - `DETOUR_OPTION_3`: string (nullable)
  - Response: JSON object representing the created test

- **Update a test**
  - Endpoint: `PUT /api/test/:uid`
  - Request body: JSON object containing any of the following fields to update:
    - `MCI`: string
    - `ORDER`: integer
    - `USE_PLAYBOOK`: string
    - `BREAKDOWN_OPTION_1`: string (nullable)
    - `BREAKDOWN_OPTION_2`: string (nullable)
    - `BREAKDOWN_OPTION_3`: string (nullable)
    - `DETOUR_OPTION_1`: string (nullable)
    - `DETOUR_OPTION_2`: string (nullable)
    - `DETOUR_OPTION_3`: string (nullable)
  - Response: JSON object with a message indicating a successful update

- **Get a test by its UID**
  - Endpoint: `GET /api/test/:uid`
  - Response: JSON object representing the retrieved test

## Contributing

Currently, the test suite is outdated and needs to be updated to match the new API format. The testing interface uses Jest. If you would like to contribute, please consider updating the tests and submitting a pull request.

To get started with updating the tests, follow these steps:

1. Clone the repository
2. Install the required dependencies by running `npm install`
3. Update the test files located in the `__tests__` folder to match the new API format
4. Run the tests with `npm test` to ensure they pass


## Testing
To run tests for the server application, execute the following command in the `dua_server` folder:
npm test

## Documentation

- [Communication](./docs/communication.md)
- [Button Box](./docs/button_box.md)
- [Redux](./docs/redux.md)
- [Components](./docs/components.md)
- [Docker](./docs/docker.md)
- [Database](./docs/database.md)
- [DUA Server](./dua_server/README.md)
- [Creating DB Tables](./docs/creating_db_tables.md)
- [Creating New Trial Scenarios](./docs/creating_new_trial_scenario.md)
- [Creating Unit Tests](./docs/creating_unit_tests.md)
