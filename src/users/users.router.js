const router = require('express').Router()
const usersServices = require('./users.services')


//? Este es el prefijo: /users
router.get('/', usersServices.getAllUsers) //? /users/
router.post('/', usersServices.postUser) //? /users/

router.get('/:id', usersServices.getUserById) //? /users/:id
router.put('/:id', usersServices.putUser) //? /users/:id
router.patch('/:id', usersServices.patchUser) //? /users/:id
router.delete('/:id', usersServices.deleteUser) //? /users/:id

module.exports = router
