import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'
import { postUser } from '../apis/usersApis'


function Register(){
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    firstName:"",
    lastName:"",
    email:"",
    confirmEmail:"",
    password:"",
    confirmPassword:""
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setForm({
      ...form,
      [name]:value
    })
  }

  const handleSubmit = (event) =>{
    event.preventDefault()

    const newUser = form

    console.log( "calling redux action,",
      newUser
    )
//    postUser( newUser )
    dispatch(registerUser(newUser))
    // .catch( err => setError(err.message) )
  }
  
  return (
    <>
      <form >
      
        <br/><br/>
        <label >First name</label>
          <input
          type= 'text'
          name = 'firstName'
          id = 'firstName'
          value = {form.firstName}
          onChange = {handleChange}
          // required
          />
        
        <br/><br/>

        <label>Last name</label>
          <input
            type= 'text'
            name = 'lastName'
            id = 'lastName'
            value = {form.lastName}
            onChange = {handleChange}
            // required
          />

      <br/><br/>

        <label>Email </label>
          <input
            type= 'text'
            name = 'email'
            id = 'email'
            value = {form.email}
            onChange = {handleChange}
            // required
          />
        
          <br/><br/>

        <label >Confirm Email </label>
          <input
            type= 'text'
            name = 'confirmEmail'
            id = 'confirmEmail'
            value = {form.confirmEmail}
            onChange = {handleChange}
            // required
            />
          
          <br/><br/>

          <label >Password </label>
            <input
              type= 'text'
              name = 'password'
              id = 'password'
              value = {form.password}
              onChange = {handleChange}
              // required
              />
          
            <br/><br/>

          <label >Confirm password </label>
            <input
              type= 'text'
              name = 'confirmPassword'
              id = 'confirmPassword'
              value = {form.confirmPassword}
              onChange = {handleChange}
              // required
              />
            
            <br/><br/>
            <hr />
            <br/><br/>
    
          <button 
            onClick={ handleSubmit }>
            Sign up
            </button>

          <button 
            onClick = { () => navigate('/login') }>
            Login
            </button>

      </form>
    </>
  )
}

export default Register
// function Register () {
  
//   const navigate = useNavigate()
  

//   const [errorMessage, setErrorMessage] = useState('')

//   const handleChange = (event) => {

//     const {name, value} = event.target
    
//     setForm({
//       ...form,
//       [name]: value
//       })
//     }

//     const onSignupClicked = (event) => {
//       event.preventDefault()
//       dispatch( registerUser( form ))
//     }
      
//     return (
//       <>
//         <div>
//           <header classname="header">
//             <h1>Register</h1>
//           </header>

//           <form classname='form-Body'>
              
//               <br/><br/>

              
//               <br/><br/>



//           </form>
//         </div>
//       </>
//     )
//   }

//})

// setFormData((prevFormData) => {
//   return {
//     ...prevFormData,
//     [ event.target.name ] : [event.target.value]
//   }
// })


// const handleSubmit = (event) => {
//   event.preventDefault()
//   setFormData( blankForm )
// }
// dissabled = { (form.email != formData.confirmEmail) && 
          //                       (formData.password != formData.confirmPassword) } 

            {/* <label classname= 'register-form'>City
            <input
              type= 'text'
              name = 'city'
              id = 'city'
              value = {FormData.city}
              onChange = {handleChange}
              classname = 'formInput'
              // required
              />
            </label>

            <br/><br/>
            
            <label classname= 'register-form'>PostCode
            <input
              type= 'text'
              name = 'postCode'
              id = 'postCode'
              value = {FormData.postCode}
              onChange = {handleChange}
              classname = 'formInput'
              required
              />
            </label>
            
            <br/><br/>

            <label classname= 'register-form'>Country
            <input
              type= 'text'
              name = 'country'
              id = 'country'
              value = {FormData.country}
              onChange = {handleChange}
              classname = 'formInput'
              required
              />
            </label> */}
