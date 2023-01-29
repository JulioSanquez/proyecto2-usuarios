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
  const idUpdate = Number(req.params.id)
  const user = req.body
  usersControllers
    .putUser(idUpdate, user)
      .then( data => res.json( data ) )
      .catch( err => console.log(err) )
}

const patchUser = (req, res) => {
  const idPatch = Number(req.params.id)
  const user = req.body
  usersControllers
    .patchUser(idPatch, user)
      .then( data => res.json( data ) )
      .catch( err => res.json({message:err}) )
}


const deleteUser = (req, res) => {
  const deletedId = Number(req.params.id)
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
    patchUser,
    deleteUser
}