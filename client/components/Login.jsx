import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login () {

  const navigate = useNavigate()

  const blankForm = {
  email:'',
  password:''
  }

  const [formData, setFormData] = useState(blankForm)
  const [errorMessage, setErrorMessage ] = useState('')

  const changeHandeler = (event) => {
    setFormData((prevFormData) =>{
      return {
        ...prevFormData,
        [ event.target.name ]: [ event.target.value ]
      }
    })
  } 

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormData( blankForm )
  } 

  const onLoginClicked = () =>{
    alert("Login not implimented")
  }

  return (
    <>
      <div>
        <header className="header">
          <h1>Login</h1>
          </header>

        { errorMessage && <div className= 'login-failed'>{errorMessage} </div> }

        <form onSubmit={handleSubmit} className='form-body'>
          <label className="login-form-email">Email 
            <input
              type= 'text'
              name = 'email'
              id = 'email'
              value= {formData.email}
              onChange = {changeHandeler}
              className='inputForm'
              placeholder='youremail@email.com' 
              />  
            </ label >

          <br/><br/>

          <label className="login-form-password">Password 
            <input
              type= 'text'
              name = 'password'
              id = 'password'
              value= {formData.password}
              onChange = {changeHandeler}
              className='inputForm'
              placeholder='password' 
              />
            </ label >

          <br/><br/>

          <button disabled = { !formData.email || !formData.password } onClick={ onLoginClicked }>
            Login
            </button>

          <br/><br/>

          <button onClick={ () => navigate( '/forgot-password' ) }>
            Forgot Password
            </button>

          <br/><br/>

          <button onClick={ () => navigate( '/register' ) }>
            Sign up
            </button>

        </form>
      </div>
    </>
  )
}

export default Login
