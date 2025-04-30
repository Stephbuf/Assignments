const { DataTypes } = require('sequelize');
const db = require('../planner_db'); 

const Task = db.define('Task', {
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
  task_date: {
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
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'tasks',
  timestamps: false
});

module.exports = Task;
