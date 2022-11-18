const express = require("express");

const dataRoutes = express.Router();

const dbo = require('../db/connect');

dataRoutes.route('/pollActiveTest').get(function(req, res, next) {
	dbo.getDb().all(`SELECT TEST_ID_ACTIVE FROM USER_INFO WHERE USER_ID = (?)`, [req.body.user_id], (err, rows) => {
		if(err) {
			res.status(400).json({"error":err.message});
			return;
		}
		res.status(200).json({rows});
	});
});

module.exports = dataRoutes;