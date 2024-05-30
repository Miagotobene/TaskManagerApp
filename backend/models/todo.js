const mongoose = require('mongoose');

// create the schema
const todoSchema = new mongoose.Schema({
    username: String,
    email: { type: String, required: true, unique:true},
    title: String,
    body: String,
    status: String,
    pomodoroComplete: Number
}, {timestamps: true})

// name and create the model 
const todoApp = mongoose.model('todoApp', todoSchema);

// make this model available 
module.exports = todoApp;