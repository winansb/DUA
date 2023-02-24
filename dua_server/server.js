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
const http = require('http');		//add http
const WebSocket = require('ws');    // websocket for bi-directional communication protocol 


/*--------------------------------------------------------------------------------------------

//Serial Port Stuff uncomment for button box
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

const cors = require("cors"); // cross-origin resource sharing
const serv_port = /* process.env.PORT || */ 8000;

var app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// init app with dependencies
app.use(cors());
app.use(express.json());
// app.use(require("./routes/getData"));
// app.use(require("./routes/insert"));
app.use(require("./routes/test"));
app.use(require("./routes/user"));
app.use(require("./routes/test_data"));
app.use(require("./routes/video"));

const dbo = require('./db/connect');

app.listen(serv_port, () => {
	console.log("SQLite3 server started");

	dbo.connectToServer(function (err) {
		if(err) {
			console.error(err);
			dbo.createDatabase();
		}
	});
	console.log(`Server running on port: ${serv_port}`);
});

  // handle HTTP GET requests to the root URL
app.get('/', (req, res) => {
	res.send('Hello, world!');
  });
  
  // handle WebSocket connections
wss.on('connection', (ws) => {
	console.log('WebSocket connected');
  
	// send a message to the client
	ws.send('Welcome to the WebSocket server');
  
	// handle messages received from the client
	ws.on('message', (message) => {
	  console.log(`Received message: ${message}`);
  
	  // echo the message back to the client
	  ws.send(`You said: ${message}`);
	});
});
  
  // start the server
server.listen(8080, () => {
	console.log('Server started on port 8080');
});





