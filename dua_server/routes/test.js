const express = require("express");

const testRouter = express.Router();

const dbo = require('../db/connect');

testRouter.route('/test/')
	.get(function(req, res, next) {
		dbo.getDb().all(`SELECT * FROM USER_INFO WHERE TEST_ID_ACTIVE IS NOT NULL`, [], (err, rows) => {
			if(err) {
				res.status(400).json({"error":err.message});
				return;
			}
			res.status(200).json({rows});
		});
	})
	.patch(function(req, res, next) {
		dbo.getDb().run(`UPDATE ONGOING_TEST SET ONGOING = ?, PAUSE_NOW = ?, VIDEO_PLAYING = ?, NEXT_VIDEO_PLAYING = ?, DESTINATION=?, PRE_ONE = ?, PRE_TWO = ?, PRE_THREE = ? WHERE UID = 1`, [req.body.ongoing, req.body.pauseNow, req.body.videoPlaying, req.body.nextVideoPlaying, req.body.destination, req.body.pre1, req.body.pre2, req.body.pre3], (err, row) => {
			if(err){
				res.status(400).json({"error": err.message});
				return;
			}
			res.status(200).json({row});
		});
	})
	;

module.exports = testRouter;