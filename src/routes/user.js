// Router: Se encarga de recibir las request que le correspondan y enviarlas al controlador 

const { Router } = require('express')
const userRouter = Router()
const { exampleUserController, exampleUserController2 } = require('../controllers/user')

userRouter.get('/', exampleUserController)
userRouter.get('/example2', exampleUserController2)

module.exports = { userRouter }