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
var app = express();
const cors = require("cors"); // cross-origin resource sharing
// require("dotenv").config("./config.env"); // load environment vars from config file, not in code
const port = /* process.env.PORT || */ 8000;

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

app.listen(port, () => {
	console.log("SQLite3 server started");

	dbo.connectToServer(function (err) {
		if(err) {
			console.error(err);
			dbo.createDatabase();
		}
	});
	console.log(`Server running on port: ${port}`);
});

