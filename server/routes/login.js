const express = require( 'express' )
const router = require('express').Router()
const bcrypt = require( 'bcrypt' )
const jwt = require( 'jsonwebtoken' )
const db = require('../db/users')

module.exports = router

router.post( '/', async (req,res) =>{
   try{
      const credentials = req.body
      const user = await db.getUserByEmail( credentials.email )
//      const {id, isVerified, passwordHash, firstName, lastName, email} = user

   //   const users = await db.getAllUsers()

      if (!user) { return res.sendStatus(401) }
      else {
         const isCorrect = await bcrypt.compare(credentials.password, user.passwordHash )

         if (isCorrect){
            return (
               jwt.sign({
                     user
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
         }      
      }
      res.sendStatus(200)
   }

   catch ( err ) {
      res.status(500).send(err.message)
   }
})