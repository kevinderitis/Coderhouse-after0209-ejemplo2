//relativo al server
// Responsabilidad del server.js o server en general: Iniciar el server en el puerto dado y derivar las request entrantes
// a los enrutadores que corresponda segun la ruta en la url

const express = require('express')
const app =  express()
const { userRouter } = require('./src/routes/user')

app.use('/user', userRouter)


app.listen(8080, () => console.log("server running"))