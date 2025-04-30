const express = require('express');
const app = express();
const planner_db = require('./planner_db'); 
const Task = require('./models/task'); 
const Goal = require('./models/goal'); 

const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Fix the DB connection
planner_db.authenticate().then(() => {
    console.log('Database is connected');
}).catch((err) => {
    console.error('An error happened with your DB connection: ' + err);
});


// Get all tasks
app.get('/tasks', function (req, res) {
    Task.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// Get a single task
app.get('/tasks/:task_id', function (req, res) {
    const task_id = parseInt(req.params.task_id);

    Task.findByPk(task_id).then((result) => {
        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send('Task not found');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// Create a new task
app.post('/tasks', function (req, res) {
    Task.create(req.body).then((result) => {
        res.status(201).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// Update a task
app.patch('/tasks/:task_id', function (req, res) {
    const task_id = parseInt(req.params.task_id);

    Task.findByPk(task_id).then((result) => {
        if (result) {
            Object.assign(result, req.body);
            result.save().then(() => {
                res.status(200).send(result);
            }).catch((err) => {
                res.status(500).send(err);
            });
        } else {
            res.status(404).send('Task not found');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// Delete a task
app.delete('/tasks/:task_id', function (req, res) {
    const task_id = parseInt(req.params.task_id);

    Task.findByPk(task_id).then((result) => {
        if (result) {
            result.destroy().then(() => {
                res.status(200).send({ message: 'Task deleted' });
            }).catch((err) => {
                res.status(500).send(err);
            });
        } else {
            res.status(404).send('Task not found');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});


// GOALS

// Get all goals
app.get('/goals', function (req, res) {
    Goal.findAll().then((result) => {
      res.status(200).send(result);
    }).catch((err) => {
      res.status(500).send(err);
    });
  });
  
  // Get a single goal
  app.get('/goals/:goal_id', function (req, res) {
    const goal_id = parseInt(req.params.goal_id, 10);
  
    Goal.findByPk(goal_id).then((result) => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send('Goal not found');
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
  });
  
  // Create a new goal
  app.post('/goals', function (req, res) {
    Goal.create(req.body).then((result) => {
      res.status(201).send(result);
    }).catch((err) => {
      res.status(500).send(err);
    });
  });
  
  // Update a goal
  app.patch('/goals/:goal_id', function (req, res) {
    const goal_id = parseInt(req.params.goal_id, 10);
  
    Goal.findByPk(goal_id).then((result) => {
      if (result) {
        Object.assign(result, req.body);
        result.save().then(() => {
          res.status(200).send(result);
        }).catch((err) => {
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Goal not found');
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
  });
  
  // Delete a goal
  app.delete('/goals/:goal_id', function (req, res) {
    const goal_id = parseInt(req.params.goal_id, 10);
  
    Goal.findByPk(goal_id).then((result) => {
      if (result) {
        result.destroy().then(() => {
          res.status(200).send({ message: 'Goal deleted' });
        }).catch((err) => {
          res.status(500).send(err);
        });
      } else {
        res.status(404).send('Goal not found');
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
  });

  app.listen(3000, function () {
    console.log('Server running on port 3000...');
});