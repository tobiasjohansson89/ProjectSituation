import  * as Tasks from './models/tasksModel'
import mongoose from 'mongoose'

// Get all tasks
const getTasks = async(req, res) => {
    const user_id = req._id
    const tasks = await Tasks.find({ _id }).sort({createdAt: -1})
    //console.log(tasks)
    res.status(200).json(tasks)
}
// Get a single task
const getTask = async(req, res) => {
    const { id } = req.params
    const task = await Tasks.findById(id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such task'})
    }

    if (!task) {
        return res.status(404).json({error: 'No such task'})
    }
    res.status(200).json(task)
}
// Create new task
const createTask = async (req, res) => {
    const {title, description, category, deadline, author} = req.body

    let emptyFields = []

    if (!title){
        emptyFields.push('title')
    }
    
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in atleast the', emptyFields})
    }
    // Add document to db
    try {
        const task = await Tasks.create({title, description, category, deadline, author})    
        res.status(200).json(task)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}


// Delete a task
const deleteTask = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such task'})
    }

    const task = await Tasks.findOneAndDelete({_id: id})

    if (!task) {
        return res.status(404).json({error: 'No such task'})
    }
    res.status(200).json(task)
}
// Update a task
const updateTask = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such task'})
    }

    const task = await Tasks.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!task) {
        return res.status(404).json({error: 'No such task'})
    }
    res.status(200).json(task)
}



module.exports = {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}