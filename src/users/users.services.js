const usersControllers = require('./users.controllers')


const findAllUsers = (req, res) => {
  usersControllers
    .findAllUsers()
      .then( data => res.json(data) )
      .catch( message => res.json({message}) )
}

const createUser = (req, res) => {
  let user = req.body
  usersControllers
    .createUser(user)
      .then( data => res.status(201).json(data) )
      .catch( message => res.json({message}) )
}


const findUserById = (req, res) => {
  const userId = Number(req.params.id)
  usersControllers
    .findUserById(userId)
      .then( data => res.json(data) )
      .catch( message => res.json({message}) )
}

const putUser = (req, res) => {
  const idUpdate = Number(req.params.id)
  const user = req.body
  usersControllers
    .putUser(idUpdate, user)
      .then( data => res.json( data ) )
      .catch( ({message}) => res.json({message}) )
}

const patchUser = (req, res) => {
  const idPatch = Number(req.params.id)
  const user = req.body
  usersControllers
    .patchUser(idPatch, user)
      .then( data => res.json( data ) )
      .catch( ({message}) => res.json({message}) )
}


const deleteUser = (req, res) => {
  const deletedId = Number(req.params.id)
  usersControllers
    .deleteUser(deletedId)
      .then( data => res.json( data ) )
      .catch( ({message}) => res.json({message}) )
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    putUser,
    patchUser,
    deleteUser
}