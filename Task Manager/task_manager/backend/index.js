const express = require('express');
const app = express();
const dbConfig = require('./db_config');
const Task = require('./models/task');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Connect to DB
dbConfig.authenticate()
    .then(() => console.log('Database is connected'))
    .catch((err) => console.error(err));

// Get all tasks
app.get('/tasks', (req, res) => {
    Task.findAll()
        .then(tasks => res.status(200).send(tasks))
        .catch(err => res.status(500).send(err));
});

// Add a task
app.post('/tasks', (req, res) => {
    Task.create(req.body)
        .then(result => res.status(201).send(result))
        .catch(err => res.status(500).send(err));
});

// Update a task
app.patch('/tasks/:task_id', (req, res) => {
    const taskId = parseInt(req.params.task_id);

    Task.findByPk(taskId)
        .then(task => {
            if (!task) return res.status(404).send('Task not found');

            Object.assign(task, req.body);

            task.save()
                .then(() => res.status(200).send(task))
                .catch(err => res.status(500).send(err));
        })
        .catch(err => res.status(500).send(err));
});

// Delete a task
app.delete('/tasks/:task_id', async (req, res) => {
    const taskId = parseInt(req.params.task_id);

    try {
        const task = await Task.findByPk(taskId);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await task.destroy();
        res.status(200).json({ message: 'Task deleted successfully', task });
    } catch (err) {
        console.error('Error deleting task:', err);
        res.status(500).json({ message: 'Server error', error: err });
    }
});


// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});
