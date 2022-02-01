const conn = require('./connection')

function getAllUsers (db = conn) {
   return db ('users')
}

function getUserById (userID, db = conn) {
   return db ('users')
   .where('id', userID)
   .first()
}

function addUser ( userData, db = conn){
   return db('users')
   .insert(userData)
}

module.exports = {
   getAllUsers,
   getUserById,
   addUser
} 