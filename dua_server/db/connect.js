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
		db.exec(`CREATE TABLE USER_INFO (
			UID int primary key not null,
			USER_ID text not null,
			TEST_ID_ACTIVE text,
			TEST_ID_COMPLETE text
		);`);
		db.exec(`CREATE TABLE FROM TEST_INFO (
			UID int primary key not null,
			TEST_ID text not null,
			TEST_INFO text not null
		);`);
		db.exec(`CREATE TABLE TEST_RESULTS (
			UID int primary key not null,
			USER_ID text not null,
			TEST_ID text not null,
			TEST_DATA text not null
		);`);

		db.exec(`INSERT INTO USER_INFO (USER_ID, TEST_ID_COMPLETE) VALUES 
			('JohnD', 'DETOUR'),
			('JaneD', 'CRASH'),
			('1234', 'CRASH;DETOUR');`);
		/*db.exec(`CREATE TABLE TEST (
			id int primary key not null,
			button_clicks int not null
		);
		INSERT INTO TEST (id, button_clicks) VALUES 
			(1, 20),
			(2, 50),
			(3, 100)
		;`);*/
		
	},
	
	getDb: function() {
		return _db;
	},
};