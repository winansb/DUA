const sqlite3 = require("sqlite3");

var _db;

module.exports = {
	connectToServer: function (callback) {
		var db = new sqlite3.Database('./db/test.db', sqlite3.OPEN_READWRITE, (err) => {
			if(err && err.code == "SQLITE_CANTOPEN") {
				createDatabase();
				return;
			}else if(err) {
				console.error("ERROR: " + err);
			}
			if(db) {
				_db = db;
				console.log("Connected to SQLite");
			}
			return callback(err);
		});
	},

	createDatabase: function() {
		var newdb = new sqlite3.Database('./db/test.db', (err) => {
			if (err) {
				console.error(err);
				return;
			}
			createTables(newdb);
		});
	},

	createTables: function(db) {
		db.exec(`CREATE TABLE TEST (
			id int primary key not null,
			button_clicks int not null
		);
		INSERT INTO TEST (id, button_clicks) VALUES 
			(1, 20),
			(2, 50),
			(3, 100)
		;`);
	},
	
	getDb: function() {
		return _db;
	},
};