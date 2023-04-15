/*****************************************************
 *
 *	SQLITE DATABASE
 *	Handles connection to server and routes to
 *	files in ./routes under server-side of project
 *
 *	Imported routes handle specific sections of
 *	database
 *	Sending/receving/updating data are managed within
 *	the same file, specific to the table being manipulated
 *
 ******************************************************/
const express = require("express"); // express hook (web framework)
const http = require("http"); //add http
const WebSocket = require("ws"); // websocket for bi-directional communication protocol
const cors = require("cors"); // cross-origin resource sharing

//Database and init function
const db = require("./config/database");
const { initializeDatabase } = require("./db/initializer");

const app = express();
const server = http.createServer(app);

// const  wss = new WebSocket.server({ server });

const PORT = process.env.POR || 8000;

// MiddleWare
app.use(cors());
app.use(express.json());

// Routes
const apiRouter = require("./api/api");
app.use("/api", apiRouter);

// Error handling middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Error discovered in server.js middleware");
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);

  initializeDatabase()
    .then(() => {
      console.log(`Database synced, server running on port ${PORT}`);
    })
    .catch((err) => {
      console.error("Error initializing database", err);
    });
});

/*--------------------------------------------------------------------------------------------

		Serial Port Stuff uncomment for button box

---------------------------------------------------------------------------------------------*/

// const { SerialPort } = require('serialport') // SerialPort for reading serial results from usb port
// const { SerialPortStream } = require('@serialport/stream')
// const serial_port = new SerialPort({ path: 'COM8', baudRate: 115200 })
// 										  //^^^^ This has to be updated for the lab. COM8 works on my laptop as the left hand USB port

// serial_port.on('data', (data) => {
// 	console.log(`Received data from serial port: ${data}`);

// 	// send the data to all connected WebSocket clients
// 	wss.clients.forEach((client) => {
// 		if (client.readyState === WebSocket.OPEN) {
// 		client.send(data);
// 		}
// 	});
// });

/*--------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------

			WebSocket Stuff uncomment for button box

---------------------------------------------------------------------------------------------*/
//const wss = new WebSocket.Server({ server });
// handle WebSocket connections
// wss.on('connection', (ws) => {
// 	console.log('WebSocket connected');

// 	// send a message to the client
// 	ws.send('Welcome to the WebSocket server');

// 	// handle messages received from the client
// 	ws.on('message', (message) => {
// 	  console.log(`Received message: ${message}`);

// 	  // echo the message back to the client
// 	  ws.send(`You said: ${message}`);
// 	});
// });
/*--------------------------------------------------------------------------------------------*/
