const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Participant = db.define('Participant', {
    UID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    PARTICIPANT_NAME: {
      type: Sequelize.STRING,
      allowNull: false
    },
    DETOUR_COMPLETE: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    BREAKDOWN_COMPLETE: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    TEST_IN_PROGRESS:{
        type: Sequelize.STRING, 
        allowNull: false 
    }
  });

  module.exports = Participant;
  