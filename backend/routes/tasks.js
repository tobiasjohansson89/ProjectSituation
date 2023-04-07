import express  from 'express'
const {
    createTask,
    getTask,
    getTasks,
    deleteTask,
    updateTask
} = require('../controllers/taskController')


const router = express.Router()

router.use(requireAuth)

//** API Endpoints **//

//creates a new Task document
router.post('/', createTask)

//Get all the Tasks
router.get('/', getTasks)

//Get a single Task
router.get('/:id', getTask)


//Delete a single Task document
router.delete('/:id', deleteTask)

//Updates a single Task
router.patch('/:id', updateTask)

module.exports = router