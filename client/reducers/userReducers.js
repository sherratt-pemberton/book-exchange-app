import {
   REGISTER_USER,
   REGISTRATION_SUCCESS
} from '../actions/userActions'

function users( state = [], action){
   switch( action.type ){
      case REGISTER_USER: 
         return [...state, action.userData]
      case REGISTRATION_SUCCESS:
         return action.userData
      default:
          return state
   }
}

export default users