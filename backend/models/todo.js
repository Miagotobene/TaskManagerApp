const mongoose = require('mongoose');

// create the schema
const todoSchema = new mongoose.Schema({
    // username: String,
    // email: { type: String, required: true, unique:true},
    name:{
        type: String,
        required:[true, 'must provide name'],
        trime: true,
        maxlength:[25, 'name cannot be more than 25 characters'] },
    completed: {
        type: Boolean,
        default: false
    },
    description: String,
    pomodoroComplete: Number
}, {timestamps: true})

// name and create the model 
const todoApp = mongoose.model('todoApp', todoSchema);

// make this model available 
module.exports = todoApp;