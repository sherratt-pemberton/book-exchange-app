const conn = require('./connection')

function getAllUsers (db = conn) {
   return db ('users')
}

function getUserById (userID, db = conn) {
   return db ('users')
   .where('id', userID)
   .first()
}

function getUserByEmail (userEmail, db = conn) {
   return db ('users')
   .where('email', userEmail)
   .first()
//   .select()
}

function addUser ( userData, db = conn){
   return db('users')
   .insert(userData)
}

module.exports = {
   getAllUsers,
   getUserById,
   getUserByEmail,
   addUser
} 