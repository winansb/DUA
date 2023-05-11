const { DataTypes } = require("sequelize");
const db = require("../../configDB/database");

const Tap = db.define("Tap", {
  UID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  TRIAL_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  TAP_ON_SCREEN_NUMBER: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  SCREEN_NAME: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  SCREEN_SEQ: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  TRIAL_RUNTIME_MS: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  PRESS_START: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PRESS_END: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  PRESS_DURATION_MS: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  PRESS_LOCATION_X_PIXELS: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  PRESS_LOCATION_Y_PIXELS: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Tap;
