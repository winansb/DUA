# Communication
This document explains the communication between the client and the server for the DUA project, which uses the SERN stack (SQLite, Express, React, Node.js) and a custom input device. The server and client communicate using axios, a popular HTTP client library for Node.js and browsers.

## Client-Server Communication
The client communicates with the server using axios to make HTTP requests to the server API. The API routes are defined in the apiRoutes.js file on the client side. Here is an example of the API routes:

```javascript 
const BASE_URL = "http://localhost:8000/api";

export const API_ROUTES = {
  // Participants routes
  CREATE_PARTICIPANT: `${BASE_URL}/participant`,
  // ... other routes
};
```

### Controllers
The client uses controllers to handle communication with the server. For instance, the participantController.js file contains functions to create, update, get, and delete participants. Here's a code snippet from participantController.js:

```javascript 
import axios from "axios";
import { API_ROUTES } from "../apiRoutes";

export const participantController = {
  createParticipant: async (participantData) => {
    try {
      const response = await axios.post(
        API_ROUTES.CREATE_PARTICIPANT,
        participantData
      );
      return response.data;
    } catch (error) {
      console.error(
        "participantController - createParticipant: Error creating Participant",
        error
      );
      throw error;
    }
  },
  // ... other functions
};
```
The participantController uses the API routes from the apiRoutes.js file to make HTTP requests to the server API using axios. The server-side API is defined in the provided documentation for the DUA Server.

### Error Handling and Debugging
When there are communication issues between the client and the server, axios will throw an error. In the example code provided, the error is caught and logged to the console, making it easier to debug communication issues:

```javascript 
catch (error) {
  console.error(
    "participantController - createParticipant: Error creating Participant",
    error
  );
  throw error;
}
```

For more detailed debugging, consider using browser developer tools to inspect network requests and responses. Look for any failed requests or unexpected responses from the server.

## Security
Currently the client communicates with the server over HTTP. To ensure secure communication, consider using HTTPS. Self-Signed certificates have been generated and provided on a thumb drive. To enable HTTPS for this project navigate to 
```
|-DUA
    |-dua_server
        |-config.env
```
and update the PROTOCOL variable accordingly 
```
PROTOCOL= http(s)
PORT=8000
KEY_PATH=path/to/key.pem
CERT_PATH=path/to/cert.pem
```


Conclusion
The communication between the client and the server in the DUA project is handled using axios, an HTTP client library. The client uses controllers to interact with the server API, and error handling is performed using try-catch blocks. To improve security, consider using HTTPS for communication between the client and the server.