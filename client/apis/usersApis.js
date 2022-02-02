import request from "superagent";

export function postUser( userData ){
   console.log(userData)
   return request.post('api/v1/register')
   .send({
      userData
   })
   .then((res) =>{
      res.body
   })
   .catch( err =>{
      console.log( err.message )
   })
}
