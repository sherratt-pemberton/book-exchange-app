const conn = require('./connection')

function getAllUsers (db = conn) {
   return db ('users')
}

function addUser ( userData, db = conn){
   return db('users')
   .insert(userData)
}

module.exports = {
   getAllUsers,
   addUser
} 