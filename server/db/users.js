const conn = require('./connection')

function getAllUsers (db = conn) {
   return db ('users')
}

function userExsists (userEmail, db = conn) {
   return db ('users')
   .where('email', userEmail)
}

function addUser ( userData, db = conn){
   return db('users')
   .insert(userData)
}



module.exports = {
   getAllUsers,
   userExsists,
   addUser
} 