import {} from 'dotenv/config'
import express  from 'express'
import mongoose from 'mongoose'

const api = express()
const routes = express.Router()


api.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes

api.use('/api/tasks/', routes)




mongoose.connect(process.env.MONG_URI)
    .then(() => {
        api.listen(process.env.PORT, () => {
            console.log('Connected to database, Listening on port: '+ process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })