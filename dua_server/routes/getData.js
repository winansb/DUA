const express = require("express");

const dataRoutes = express.Router();

const dbo = require('../db/connect');

dataRoutes.route('/getData').get(function(req, res, next) {
	dbo.getDb().all(`SELECT * FROM TEST`, [], (err, rows) => {
		if(err) {
			res.status(400).json({"error":err.message});
			return;
		}
		res.status(200).json({rows});
	});
	// dbo.getDb().close();
});

module.exports = dataRoutes;