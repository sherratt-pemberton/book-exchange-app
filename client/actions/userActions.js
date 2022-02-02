import {postUser} from '../apis/usersApis'

export const REGISTER_USER = "REGISTER_USER"

export const REGISTRATION_PENDING = 'PLACE_ORDER_PENDING'
export const REGISTRATION_SUCCESS = 'PLACE_ORDER_SUCCESS'

export function registrationPending () {
  return {
   type: REGISTRATION_PENDING
  }
}

export function registrationSuccess () {
  return {
   type: REGISTRATION_SUCCESS
  }
}

export function registerNewUser( userData ){
   return { 
      type: REGISTER_USER,
            userData 
   }
}

export function registerUser( userData ){
   return ( dispatch ) =>{
      postUser( userData )

      .then (() => {
         dispatch( registerNewUser( userData ))
      })
      .catch((err) => {
         const errMessage = err.response?.text || err.message
         dispatch(showError(errMessage))
       })
   }
}

// export function registerUser (userData){
// return (dispatch) =>{
//    dispatch( registrationPending() )
//    return postUser( userData )
//    .then(()=>{
//       dispatch(registrationSuccess)
//       return res.sendStatus(200) 
//    })
//    .catch((err)=>{
//       const errMessage = err.responce?.text || err.message
//    })
// }
// }