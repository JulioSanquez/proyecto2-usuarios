const usersControllers = require('./users.controllers')


const getAllUsers = (req, res) => {
  usersControllers
    .findAllUsers()
      .then( data => res.status(200).json(data) )
      .catch( message => res.status(400).json({message}) )
}

const getUserById = (req, res) => {
  const userId = Number(req.params.id)
  usersControllers
    .findUserById(userId)
      .then( data =>
        data?
        res.status(200).json(data):
        res.status(404).json({message:'Invalid ID'})
      )
      .catch( err => res.status(400).json({err}) )
}

const postUser = (req, res) => {
  let user = req.body
  usersControllers
    .createUser(user)
      .then( data => 
        data?
        res.status(201).json(data):
        res.status(404).json({message:'Invalid ID'})
      )
      .catch( message => res.status(400).json({message}) )
}

const putUser = (req, res) => {
  const idUpdate = Number(req.params.id)
  const user = req.body
  usersControllers
    .updateUser(idUpdate, user)
      .then( data => data?
        res.status(201).json(data):
        res.status(404).json({message:'Invalid ID'})
      )
      .catch( ({message}) => res.json({message}) )
}

const patchUser = (req, res) => {
  const idPatch = Number(req.params.id)
  const user = req.body
  usersControllers
    .patchUser(idPatch, user)
      .then( data => data?
        res.status(201).json(data):
        res.status(404).json({message:'Invalid ID'})
      )
      .catch( ({message}) => res.json({message}) )
}


const deleteUser = (req, res) => {
  const deletedId = Number(req.params.id)
  usersControllers
    .deleteUser(deletedId)
      .then( data => data?
        res.status(201).json(data):
        res.status(404).json({message:'Invalid ID'})
      )
      .catch( ({message}) => res.json({message}) )
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    putUser,
    patchUser,
    deleteUser
}