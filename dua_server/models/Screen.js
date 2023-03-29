const { DataTypes} = require('sequelize');
const db = require('../config/database');

const Screen = db.define('Screen', {
    UID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    SCREEN_NUMBER_IN_ORDER: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SCREEN_DURATION_SECONDS: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    LOCAL_TIME_AT_START: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TRIAL_RUNTIME_SECONDS: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    SCREEN_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TRIAL_ID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EXIT_METHOD: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    VIDEO_PLAYING: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    VIDEO_TIME_AT_START_SECONDS: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    VIDEO_TIME_AT_END: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
  
  module.exports = Screen;