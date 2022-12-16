const sqlite3 = require("sqlite3");

var _db;

module.exports = {
	connectToServer: function (callback) {
		var db = new sqlite3.Database('./db/test.db', sqlite3.OPEN_READWRITE /* | sqlite3.OPEN_CREATE */, (err) => {
			if(err && err.code == "SQLITE_CANTOPEN") {
				this.createDatabase();
				console.log("Database does not exist, creating...");
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
			this.createTables(newdb);
		});
	},

	createTables: function(db) {
		db.exec(`CREATE TABLE USER_INFO (
			UID integer primary key autoincrement,
			USER_ID text not null,
			TEST_ID_ACTIVE text,
			TEST_ID_COMPLETE text
		);`);
		db.exec(`CREATE TABLE TEST_INFO (
			UID integer primary key autoincrement,
			TEST_ID text not null,
			TEST_INFO text not null
		);`);
		db.exec(`CREATE TABLE TEST_RESULTS (
			UID integer primary key autoincrement,
			USER_ID text not null,
			TEST_ID text not null,
			TEST_DATA text not null
		);`);

		db.exec(`INSERT INTO USER_INFO (USER_ID, TEST_ID_COMPLETE) VALUES 
			('JohnD', 'DETOUR'),
			('JaneD', 'CRASH'),
			('1234', 'CRASH;DETOUR');`);

		db.exec(`CREATE TABLE VIDEO_DISPLAY (

										UID integer primary key autoincrement,
										CURRENT_VIDEO text not null
			);`);

		db.exec(`INSERT INTO VIDEO_DISPLAY (CURRENT_VIDEO) 

												VALUES	 ('myVid1')
			);`);

		db.exec(`CREATE TABLE TEST_BREAKDOWN_VIDEOS ( 

												UID integer primary key autoincrement,
												VIDEO_TO_PLAY text not null,
												TIME_OF_NEXT_CHECK float not null,


			);`);

		db.exec(`
			INSERT INTO TEST_BREAKDOWN_VIDEOS (VIDEO_TO_PLAY, TIME_OF_NEXT_CHECK) 

												VALUES	('myVid1', 41),
																('myVid2', 47.5),
																('myVid3', 24),
																('myVid4', 37)
			);`);

		db.exec(`CREATE TABLE TEST_BREAKDOWN_SCREENS ( 
																								
												TIME_OF_SCREEN float not null, 
												SCREEN_CLICKABLE boolean not null, 
												
			);`);


		db.exec(`
			INSERT INTO TEST_BREAKDOWN_SCREENS (TIME_OF_SCREEN, SCREEN_CLICKABLE) 

												VALUES	(85, FALSE),
																(13, TRUE),
																(0, TRUE),
																(15, TRUE),
																(15, TRUE),
																(15, TRUE),
																(0, TRUE),
																(15, TRUE),
																(0, FALSE),
																(10, TRUE),
																(0,FALSE)

			);`);

			db.exec(`CREATE TABLE TEST_PAUSE ( 

											UID integer primary key autoincrement,
											TIME_OF_NEXT_PAUSE float,
											PAUSE_NOW boolean
			);`);

		db.exec(`
			INSERT INTO TEST_PAUSE (TIME_OF_NEXT_PAUSE, PAUSE_NOW) 

												VALUES	(97, FALSE),
																(0, FALSE)
			);`);


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