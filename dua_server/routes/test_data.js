const express = require("express");

const testDataRouter = express.Router();

const dbo = require('../db/connect');

testDataRouter.route('/test_data/')
	.post(function(req, res, next) {
		dbo.getDb().run(`INSERT INTO TEST_RESULTS (USER_ID,TEST_ID,TEST_DATA) VALUES (?,?,?)`, [req.body.USER_ID, req.body.TEST_ID, req.body.TEST_DATA], (err, row) => {
			if(err) {
				res.status(400).json({"error":err.message});
				console.log("oops");
				return;
			}
			res.status(200).json({row});
		});
	});

module.exports = testDataRouter;