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
	.post(function(req, res, next) {
		dbo.getDb().run(`UPDATE USER_INFO SET TEST_ID_ACTIVE = ? WHERE USER_ID = ?`, [req.body.TEST_ID, req.body.USER_ID], (err, row) => {
			if(err) {
				res.status(400).json({"error":err.message});
				console.log("oops");
				return;
			}
			res.status(200).json({row});
		});
	})
	;

module.exports = testRouter;