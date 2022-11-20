const express = require("express");

const insertRoutes = express.Router();

const dbo = require('../db/connect');

insertRoutes.route('/insert/').post(function(req, res, next) {
	var reqBody = req.body;
	dbo.getDb().run(`INSERT INTO TEST (id, button_clicks) VALUES(?,?)`, [reqBody.id, reqBody.button_clicks], function (err, result) {
		if(err) {
			res.status(400).json({"error":err.message});
			return;
		}
		res.status(201).json({"id": reqBody.id});
	});
	// dbo.getDb().close();
});

module.exports = insertRoutes;