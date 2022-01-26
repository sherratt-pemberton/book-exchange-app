import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = express.Router

const {getAllUsers, addUser} = require( '..db/users')

export const registerUser = () =>{
   router.post( '/api/register', (req,res) =>{
      const {email, password} = req.body

      const user = await getAllUsers().findOne({email})

      if (user) {
         res.sendStatus(409)
      }

      const passwordHash = await bcrypt.hash(password, 10) 

      const accountInfo ={
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         email: req.body.email,
         password: passwordHash,
         street: req.body.street,
         suburb: req.body.suburb,
         city: req.body.city,
         country: req.body.country,
         postCode: req.body.postCode
      }

      addUser( accountInfo )
      
      .then(idArr =>{
         res.json({ newId:idArr[0] })
      })
      .catch( err =>{
         console.log( 'I cant do that Hall', err.message )
         res.status (500).json({error: err.message})
      })

   } )

}
module.export ={
   Router
}