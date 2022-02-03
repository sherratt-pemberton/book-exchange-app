const express = require( 'express' )
const router = require('express').Router()
const bcrypt = require( 'bcrypt' )
const jwt = require( 'jsonwebtoken' )
const db = require('../db/users')

module.exports = router


//route checks for exsisting user in the database
//if the user email does not exsist a new account is posted
//the server then responsds with a json web token
//inputs: user register form data from front end
//outputs: json web token

router.post ('/', async (req,res) =>{
   const newUser = req.body.userData
//   const newUser = req.body

   const users = await db.getAllUsers()

   console.log("data:", newUser)

   if (users.find( user => user.email == newUser.email )){
      console.log( "email found")
      res.sendStatus(409)
   }
   else{ 
      console.log("password:", newUser.password)
      const passwordHash = await bcrypt.hash(newUser.password, 10) 
      try{     
         return(   
            db.addUser({
               firstName: newUser.firstName,
               lastName: newUser.lastName,
               email: newUser.email,
               passwordHash,         
               isVerified: false
            }) 
         )
         .then( newUserId =>{
            return (
               jwt.sign({
                  userId: newUserId,
                  firstName: newUser.firstName,
                  lastName: newUser.lastName,
                  email: newUser.email,
                  passwordHash,         
                  isVerified: false
               },
                  process.env.JWT_SECRET,
                  {
                     expiresIn: '2d'
                  },
                  (err, token)=>{
                     if( err ){
                        return res.status(500).send(err)
                     }
                     res.status(200).json({ token })
                  }
               )
            )
         })
      }
      catch ( err ) {
         res.status(500).send(err.message)
      }
   }
})
