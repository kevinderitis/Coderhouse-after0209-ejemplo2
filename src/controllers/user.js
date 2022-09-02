// Controlador: Procesar las request entrantes segun el controlador elegido anteriormente por el router
const contenedor = require('../DAOs/user')

const exampleUserController = (req, res) => {
    res.send("Todo ok con user")
}

const exampleUserController2 = (req, res) => {
    res.send("Este es el segundo controller")
}

const exampleUserControllerPost = (req, res) => {
    let user = req.body
    contenedor.guardar(user)

    res.send("Todo ok con user")
}

module.exports = { exampleUserController }