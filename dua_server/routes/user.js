const express = require("express");

const userRoutes = express.Router();

const dbo = require('../db/connect');

userRoutes.route('/user/')
	.post(function(req, res) {
		var reqBody = req.body;
		console.log("POST REQUEST (NEW USER): " + reqBody.user_id);
		/* dbo.getDb().get(`SELECT USER_ID FROM USER_INFO WHERE USER_ID = ?`, reqBody.user_id, () => {
			if(res != null) {
				res.status(400).json({"error":"user already exists"});
			}
		}); */
		dbo.getDb().run(`INSERT INTO USER_INFO (USER_ID, TEST_ID_ACTIVE, TEST_ID_COMPLETE) VALUES(?, NULL, NULL)`, [reqBody.user_id], function (err, result) {
			if(err) {
				res.status(400).json({"error":err.message});
				return;
			}
			res.status(201).json({"user_id": reqBody.user_id});
			// res.status(201).json({"new user_id created": reqBody.user_id});
		});
	})
	.get(function(req, res) {
		dbo.getDb().all(`SELECT * FROM USER_INFO`, [], (err, rows) => {
			if(err) {
				res.status(400).json({"error":err.message});
				return;
			}
			res.status(200).json({rows});
		});
	})

module.exports = userRoutes;