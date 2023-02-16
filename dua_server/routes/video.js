const express = require("express");

const videoRoutes = express.Router();

const dbo = require('../db/connect');

videoRoutes.route('/video/')
  .post(function(req, res, next) {
    dbo.getDb().run(`UPDATE ONGOING_TEST SET NEXT_VIDEO_PLAYING = ? WHERE UID = 1`,[req.body.NEXT_VIDEO_PLAYING], (err, row) => {
      if(err) {
        res.status(400).json({"error":err.message});
        console.log("video post didn't work");
        return; 
      }
      res.status(200).json({ "success": true });
    });
  })
  .get(function(req, res, next) {
    dbo.getDb().all(`SELECT * FROM ONGOING_TEST WHERE UID = 1`, [], (err, row) => {
      if(err) {
        res.status(400).json({"error":err.message});
        console.log("video get didn't work");
        return;
      }
      res.status(200).json({row});
    });
  })

videoRoutes.route('/pause/')
  .post(function(req, res) {
    dbo.getDb().run(`UPDATE ONGOING_TEST SET PAUSE_NOW = ? WHERE UID = 1`,[req.body.PAUSE_NOW], (err, row) => {
      if(err) {
        res.status(400).json({"error":err.message});
        console.log("Pause post didn't work");
        return; 
      }
      res.status(200).json({row});
    });
  })
  .get(function(req, res) {
    dbo.getDb().all(`SELECT * FROM ONGOING_TEST WHERE UID = 1`, [], (err, row) => {
      if(err) {
        res.status(400).json({"error":err.message});
        console.log("Pause get didn't work");
        return;
      }
      res.status(200).json({row});
    });
  })

module.exports = videoRoutes; 