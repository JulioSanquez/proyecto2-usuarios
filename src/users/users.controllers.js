//? Este archivo tendr funciones que hagan acciones a la base de datos( debe retornar una promesa )

let usersDB = [
    {
      id :1,
      firstName: "Sahid",
      lastName: "Kick",
      email: "sahid.kick@academlo.com",
      password: "root",
      age: 22
    },
    {
      id :2,
      firstName: "Julio",
      lastName: "Sanchez",
      email: "julio.sanchez@gmail.com.com",
      password: "1234",
      age: 29
    },
    {
      id :3,
      firstName: "Cesar",
      lastName: "Marquez",
      email: "cesar.marquez@hotmail.com.com",
      password: "0000",
      age: 35
    }
]

let baseId = 3

const findAllUsers = async() => await usersDB


const findUserById = async(id) => {
    const filteredUser = usersDB.find( user => {
        return user.id === id
    })

    return await filteredUser
}

const createUser = async(userObject) => {
    let newUser = {
        id: ++baseId,
        firstName: userObject.firstName,
        lastName: userObject.lastName,
        email: userObject.email,
        password: userObject.password,
        age: userObject.age
    }

    usersDB.push(newUser)

    return await newUser
}

const putUser = async(UserToUpdate) => {
  if(!usersDB.some( user => user.id === UserToUpdate.id )) return null

  usersDB.forEach( (user, i, arr) => {
    if( user.id === UserToUpdate.id ){
      arr[i] = UserToUpdate
    }
  })

  return await UserToUpdate
}

const deleteUser = async(idDelete) => {
    const userDeleted = findUserById(idDelete)

    if(!userDeleted) return null

    usersDB = usersDB.filter( user => user.id !== idDelete )
    return await userDeleted
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    putUser,
    patchUser,
    deleteUser
}