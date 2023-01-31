const express = require('express')
const usersRouter = require('./users/users.router')


const app = express()
const PORT = 9000

app.use(express.json())

app.get( '/', (req, res) => res.json({message: "Bienvenidos a el users CRUD by Julio Sanchez"}))

app.use('/users', usersRouter)

app.listen( PORT, () => console.log(`Server listening at http://localhost: ${PORT}`))

module.exports = app
