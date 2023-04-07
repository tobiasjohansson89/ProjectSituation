import mongoose from "mongoose"

const Schema = mongoose.Schema

const tasksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    category:{
        type: String,
        required: false
    },
    author: {
        type: String,
        required: true,
        default: 'trine'
    }

}, {timestamps: true })

module.exports = mongoose.model('tasks', tasksSchema)


// task: title, description, category, deadline

