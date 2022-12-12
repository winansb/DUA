const express = require("express");

const videoRoutes = express.Router();

const dbo = require('../db/connect');

videoRoutes.route('/video/')
  .post(function(req, res, next) {
    dbo.getDb().run(`UPDATE VIDEO_DISPLAY SET CURRENT_VIDEO = ? WHERE UID = 0`,[req.body.VIDEO_KEY], (err, row) => {
      if(err) {
        res.status(400).json({"error":err.message});
        console.log("video post didn't work");
        return; 
      }
      res.status(200).json({row});
    });
  })
  .get(function(req, res, next) {
    dbo.getDb().all(`SELECT * FROM CURRENT_VIDEO WHERE UID = 0`, [], (err, row) => {
      if(err) {
        res.status(400).json({"error":err.message});
        console.log("video get didn't work");
        return;
      }
      res.status(200).json({row});
    });
  })

module.exports = videoRoutes; 