// connect to Mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pomodoroApp');

// import models 
const todo = require('./todo'); // imports the model


const db = mongoose.connection;
db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
})
// check for errors 
db.on('error', (error) => {
    console.log('Database error\n', error)
});



// export models here 
module.exports = {
    // placing the models inside of this export
    todo,
}