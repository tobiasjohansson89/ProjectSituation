import {} from 'dotenv/config'
import express  from 'express'
import mongoose from 'mongoose'

const api = express()
const routes = express.Router()

// Routes

api.use('/api/tasks/', routes)


// task: title, description, category, deadline


mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // Listen for requests
        api.listen(process.env.PORT, () => {
            console.log('Connected to database, Listening on port: '+ process.env.PORT)
        })
    })