const { DataTypes } = require("sequelize");
const db = require("../../configDB/database");

const Participant = db.define("Participant", {
  UID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  PARTICIPANT_ID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DETOUR_COMPLETE: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  BREAKDOWN_COMPLETE: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  DETOUR_IN_PROGRESS: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  BREAKDOWN_IN_PROGRESS: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  TRIAL_ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Participant;
