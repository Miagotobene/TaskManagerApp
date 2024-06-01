// connection to mongoose
const mongoose = require('mongoose')
const todoApp = require('../models/todo');
mongoose.connect('mongodb://localhost/pomodoroApp');


// CREATE
todoApp.create({ 
   name: 'something', 
   completed: true,
   body: 'Work on your application',
   status: 'in progress', 
   pomodoroComplete: 5  })
.then(newModel => {
   console.log('---- NEW MODEL -----', newModel);
})
.catch(error => console.log('---- ERROR ----\n', error));

// READ

// UPDATE

// DELETE