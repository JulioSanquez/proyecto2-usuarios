const usersControllers = require('./users.controllers')


const findAllUsers = (req, res) => {
  usersControllers
    .findAllUsers()
      .then( data => res.json(data) )
      .catch( err => console.log(err) )
}

const createUser = (req, res) => {
  let user = req.body
  usersControllers
    .createUser(user)
      .then( data => res.status(201).json(data) )
      .catch( err => console.log(err) )
}


const findUserById = (req, res) => {
  const userId = Number(req.params.id)
  usersControllers
    .findUserById(userId)
      .then( data => res.json(data) )
      .catch( err => console.log(err) )
}

const putUser = (req, res) => {
  let user = req.body
  usersControllers
    .putUser(user)
      .then( data => res.json( data ) )
      .catch( err => console.log(err) )
}


const deleteUser = (req, res) => {
  const deletedId = req.body.id
  usersControllers
    .deleteUser(deletedId)
      .then( data => res.json( data ) )
      .catch( err => console.log(err) )
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    putUser,
    deleteUser
}