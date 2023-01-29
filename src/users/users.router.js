const router = require('express').Router()
const usersServices = require('./users.services')


//? Este es el prefijo: /users

router.get('/', usersServices.findAllUsers) //? /users/
router.post('/', usersServices.createUser) //? /users/

router.get('/:id', usersServices.findUserById) //? /users/:id
router.delete('/:id', usersServices.deleteUser) //? /users/:id¡
router.put('/:id', usersServices.putUser) //? /users/:id

module.exports = router
