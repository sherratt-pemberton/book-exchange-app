const express = require( 'express' )
const router = require('express').Router()
const bcrypt = require( 'bcrypt' )
const jwt = require( 'jsonwebtoken' )
const db = require('../db/users')
const { database } = require('pg/lib/defaults')

module.exports = router


//route checks for exsisting user in the database
//if the user email does not exsist a new account is posted
//the server then responsds with a json web token
//inputs: user register form data from front end
//outputs: json web token

router.post ('/', async (req,res) =>{
   const {email, password} = req.body

   console.log( req.body )

   console.log( email, password)

   const users = await db.getAllUsers()

   // console.log( "users from the database", users )

   if (users.find( user => user.email == email )){
      console.log( "email found")
      res.sendStatus(409)
   }
   else{ 
      const passwordHash = await bcrypt.hash(password, 10) 
   
      try{
          
         return(   db.addUser({
               firstName: req.body.firstName,
               lastName: req.body.lastName,
               email: email,
               passwordHash,         
               isVerified: false
            }) )
         .then( newUserId =>{
            return (
               jwt.sign({
                  userId: newUserId,
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  email: email,
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