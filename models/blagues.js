const { DataTypes } = require('sequelize');
const db = require('../db/database');

const Blagues = db.define(
  'Blagues',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    blagues: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reponses:{
        type: DataTypes.STRING,
        allowNull: false
    }
    
  },
);

module.exports = Blagues;