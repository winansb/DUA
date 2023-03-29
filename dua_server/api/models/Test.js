const { DataTypes } = require('sequelize');
const db = require('../../config/database');

const Test = db.define('Test', {
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
      BREAKDOWN_TEST_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      DETOUR_TEST_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      USE_PLAYBOOK: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    module.exports = Test;