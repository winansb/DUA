const { DataTypes } = require("sequelize");
const db = require("../../configDB/database");

const Test = db.define("Test", {
  UID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  MCI: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ORDER: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  USE_PLAYBOOK: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  BREAKDOWN_OPTION_1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  BREAKDOWN_OPTION_2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  BREAKDOWN_OPTION_3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DETOUR_OPTION_1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DETOUR_OPTION_2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DETOUR_OPTION_3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Test;
