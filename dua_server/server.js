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
const port = process.env.PORT || 8000;

// init app with dependencies
app.use(cors());
app.use(express.json());
app.use(require("./routes/getData"));
app.use(require("./routes/insert"));

const dbo = require('./db/connect');

app.listen(port, () => {
	console.log("SQLite3 server started");

	dbo.connectToServer(function (err) {
		if(err)
			console.error(err);
	});
	console.log(`Server running on port: ${port}`);
});

/* 

function createTables(newdb) {
	newdb.exec(`CREATE TABLE TEST (
		id int primary key not null,
		button_clicks int not null
	);
	INSERT INTO TEST (id, button_clicks) VALUES 
		(1, 20),
		(2, 50),
		(3, 100)
	;`, () => {
		runQueries(newdb);
	});
}

function runQueries(db) {
	db.each(`SELECT id, button_clicks FROM TEST`, (err, row) => {
		if(err) return;
		console.log(row.id + ": " + row.button_clicks);
	});
} */

