const { DataTypes } = require('sequelize');
const db = require('../planner_db'); // same db connection as tasks

const Goal = db.define('Goal', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  goal_date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  priority_level: {
    type: DataTypes.STRING,
    allowNull: true
  },
  progress_level: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'goals', // new table name
  timestamps: false
});

module.exports = Goal;
