const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const task_routes = require('./task_routes');

const app = express();
app.use(bodyParser.json());  

app.use(express.static(__dirname)); 


const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/taskManager';  

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

  // Add this code before your task routes
app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API!');
});


// Use task routes
app.use('/api/tasks', task_routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
