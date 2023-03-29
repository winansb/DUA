const Sequelize = require('sequelize');
const tapModel = require('./models/Tap');
const screenModel = require('./models/Screen');
const testModel = require('./models/Test');
const participantModel = require('./models/Participant')

// get Sequelize instance
const db = require('../config/database');
  
  
  // Define models
  const Tap = tapModel( db, Sequelize );
  const Screen = screenModel( db, Sequelize );
  const Test = testModel( db, Sequelize );
  const Participant = participantModel( db, Sequelize ); 
  
  // Define database initialization function
  const initializeDatabase = async () => {
    try {
      await db.authenticate();
      console.log('Connection to the database has been established successfully.');
  
      // Sync models to the database
      await db.sync();
  
      console.log('All models were synchronized successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
  
  // Export models and initializeDatabase function
  module.exports = {
    Tap,
    Screen,
    Test,
    Participant,
    initializeDatabase,
  };