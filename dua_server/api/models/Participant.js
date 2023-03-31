const { DataTypes } = require('sequelize');
const db = require('../../config/database');

const Participant = db.define('Participant', {
    UID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    PARTICIPANT_NAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DETOUR_COMPLETE: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    BREAKDOWN_COMPLETE: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    TEST_IN_PROGRESS:{
        type: DataTypes.STRING, 
        allowNull: false 
    }
  });

  module.exports = Participant;
  