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
		/***************CREATE TABLES***************/
		db.exec(`CREATE TABLE PARTICIPANTS (
			UID integer primary key autoincrement,
			PARTICIPANT_NAME text not null,
			DETOUR_COMPLETE boolean not null,
			BREAKDOWN_COMPLETE boolean not null
		);`);
		db.exec(`CREATE TABLE ONGOING_TEST (
			UID integer primary key autoincrement, 
			ONGOING boolean not null, 
			PAUSE_NOW boolean not null, 
			VIDEO_PLAYING string  not null, 
			NEXT_VIDEO_PLAYING string, 
			DESTINATION string not null, 
			PRE_ONE boolean not null,
			PRE_TWO boolean not null,
			PRE_THREE boolean not null
		);`);
		
		db.exec(`CREATE TABLE TEST_DATA_MASTER_LIST (
			UID integer primary key autoincrement, 
			PARTICIPANT_UID integer not null,
			PARTICIPANT_NAME text not null,
			TEST_SCENARIO text not null, 
			USER_PREFERENCES integer not null,
			DATE_TAKEN datetime not null,
			TEST_RUN_TIME_MS double not null
		);`);





		/***************ASSIGN DEFAULTS***************/
		db.exec(`INSERT INTO ONGOING_TEST (ONGOING, PAUSE_NOW, VIDEO_PLAYING, NEXT_VIDEO_PLAYING, DESTINATION, PRE_ONE, PRE_TWO, PRE_THREE ) VALUES
				(0, 0, 'DETOUR_START' , 'DETOUR_WALGREENS', "WALGREENS", 0, 1, 0 )
			;`);
		
	},
	
	getDb: function() {
		return _db;
	},
};