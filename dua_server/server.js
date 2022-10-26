/*********************************************
*
*	SHOULD DECIDE/CHECK WITH LAB ABOUT THEIR
*	SERVER CAPABILITIES BEFORE CHOOSING A
*	DATABASE TYPE/STACK
*	(default installed here is mongodb)
*
**********************************************/
const express = require("express"); // express hook (web framework)
const app = express();

const cors = require("cors"); // cross-origin resource sharing
require("dotenv").config("./config.env"); // load environment vars from config file, not in code
const port = process.env.PORT || 5000;

// init app with dependencies
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// would connect to db if we had one
const dbo = require("./db/conn");

app.listen(port, () => {
	dbo.connectToServer(function (err) {
		if(err)
			console.error(err);
	});
	console.log(`Server is running on port: ${port}`);
});