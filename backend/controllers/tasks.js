const todoApp = require('../models/todo')
// CRUD : get all tasks
const getAllTasks = async (req, res) => { 
    try {
        const tasks = await todoApp.find({}) // find all tasks
        res.status(200).json({tasks})
    } catch (error){
        res.status(500).json({msg: error})
    }
}

// CRUD : create a task
const createTask = async (req,res) => {
    try {
        const task = await todoApp.create(req.body)
        // res.status(201).json({task})
        res.redirect('/todo');// this needs to change
    } catch (error){
        res.status(500).json({msg: error})
    }
    
}

// CRUD : get a task
const getTask = async (req,res) => {
    try {
        const {id:taskID } = req.params
        const task = await todoApp.findOne({_id: taskID}) // look for id that has the same value as in our params
    if(!task){
        return res.status(404).json({ msg: `No task with id : ${taskID}`})
    }
    res.status(200).json({task})
        
    } catch(error){
        res.status(500).json({msg: error})

    }
}

// CRUD : update a task
const updateTask = async (req,res) => {
    try {
        const { id: taskID } = req.params;
        const task = await todoApp.findOneAndUpdate({ _id : taskID}, req.body, {
            new: true, runValidators: true
        })
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

// CRUD : delete a task
const deleteTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const task = await todoApp.findOneAndDelete({_id:taskID});
        if(!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({task})
    } catch(error){
        res.status(500).json({msg: error})

    }
}

module.exports = {
    getAllTasks, 
    createTask, 
    getTask, 
    updateTask, 
    deleteTask
}