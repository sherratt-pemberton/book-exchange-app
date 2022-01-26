import {Navigate} from 'react-router-dom'
import React from 'react'

export const PrivateRoute = ({props}) => {
   const user = null

   return user ? props : <Navigate to = '/login' /> 
}