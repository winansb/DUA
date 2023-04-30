const { DataTypes } = require("sequelize");
const db = require("../../configDB/database");

const Test = db.define("Test", {
  UID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  PARTICIPANT_ID:{
    type: DataTypes.STRING,
    allowNull: false, 
  },
  MCI: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ORDER: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  USE_PLAYBOOK: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  EMERGENCY_CONTACT_BREAKDOWN: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ROADSIDE_ASSISTANCE: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  RELAXING_MUSIC: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  NEXT_DESTINATION: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  GO_HOME: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  EMERGENCY_CONTACT_DETOUR: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Test;
