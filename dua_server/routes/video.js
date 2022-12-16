const express = require("express");

const videoRoutes = express.Router();

const dbo = require('../db/connect');

videoRoutes.route('/video/')
  .post(function(req, res, next) {
    dbo.getDb().run(`UPDATE TEST_BREAKDOWN_VIDEOS SET VIDEO_TO_PLAY = ? WHERE UID = ?`,[req.body.VIDEO_KEY,req.body.UID], (err, row) => {
      if(err) {
        res.status(400).json({"error":err.message});
        console.log("video post didn't work");
        return; 
      }
      res.status(200).json({row});
    });
  })
  .get(function(req, res, next) {
    dbo.getDb().all(`SELECT * FROM TEST_BREAKDOWN_VIDEOS WHERE UID = ?`, [req.body.UID], (err, row) => {
      if(err) {
        res.status(400).json({"error":err.message});
        console.log("video get didn't work");
        return;
      }
      res.status(200).json({row});
    });
  })

videoRoutes.route('/pause/')
  .post(function(req, res, next) {
    dbo.getDb().run(`UPDATE TEST_PAUSE SET PAUSE_NOW = ? WHERE UID = 1`,[req.body.PAUSE_NOW,req.body.UID], (err, row) => {
      if(err) {
        res.status(400).json({"error":err.message});
        console.log("Pause post didn't work");
        return; 
      }
      res.status(200).json({row});
    });
  })
  .get(function(req, res, next) {
    dbo.getDb().all(`SELECT * FROM TEST_PAUSE WHERE UID = 1`, [req.body.UID], (err, row) => {
      if(err) {
        res.status(400).json({"error":err.message});
        console.log("Pause get didn't work");
        return;
      }
      res.status(200).json({row});
    });
  })

module.exports = videoRoutes; 