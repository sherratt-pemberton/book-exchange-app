import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Register () {
  
  const navigate = useNavigate()

  const blankForm = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
    address : {
      street:"",
      suburb:"",
      city:"",
      country:"",
      postCode:""
    }
  }

  const [formData, setFormData] = useState(blankForm) 
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [ event.target.name ] : [event.target.value]
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormData( blankForm )
  }

  const onSignupClicked = () => {
    alert("Sign up not implimented")
  }

  return (
    <>
      <div>
        <header className="header">
          <h1>Register</h1>
        </header>

        <form onSubmit={handleSubmit} className='form-Body'>
        <label className= 'register-form'>First name
          <input
            type= 'text'
            name = 'firstName'
            id = 'firstName'
            value = {FormData.firstName}
            onChange = {handleChange}
            className = 'formInput'
            required
            />
          </label>
          
          <br/><br/>

          <label className= 'register-form'>Last name
          <input
            type= 'text'
            name = 'lastName'
            id = 'lastName'
            value = {FormData.lastName}
            onChange = {handleChange}
            className = 'formInput'
            required
            />
          </label>
          
          <br/><br/>

          <label className= 'register-form'>Email
          <input
            type= 'text'
            name = 'email'
            id = 'email'
            value = {FormData.email}
            onChange = {handleChange}
            className = 'formInput'
            required
            />
          </label>

          <br/><br/>

          <label className= 'register-form'>Password
          <input
            type= 'text'
            name = 'password'
            id = 'password'
            value = {FormData.password}
            onChange = {handleChange}
            className = 'formInput'
            required
            />
          </label>
          
          <br /><br />
          
          <label className= 'register-form'>Confirm password
          <input
            type= 'text'
            name = 'confirmPassword'
            id = 'confirmPassword'
            value = {FormData.confirmPassword}
            onChange = {handleChange}
            className = 'formInput'
            required
            />
          </label>

          <br/><br/>
          
          <label className= 'register-form'>Street
          <input
            type= 'text'
            name = 'street'
            id = 'street'
            value = {FormData.street}
            onChange = {handleChange}
            className = 'formInput'
            required
            />
          </label>
          
          <br/><br/>

          <label className= 'register-form'>Suburb
          <input
            type= 'text'
            name = 'suburb'
            id = 'suburb'
            value = {FormData.suburb}
            onChange = {handleChange}
            className = 'formInput'
            required
            />
          </label>
          
          <br/><br/>

          <label className= 'register-form'>City
          <input
            type= 'text'
            name = 'city'
            id = 'city'
            value = {FormData.city}
            onChange = {handleChange}
            className = 'formInput'
            required
            />
          </label>

          <br/><br/>
          
          <label className= 'register-form'>PostCode
          <input
            type= 'text'
            name = 'postCode'
            id = 'postCode'
            value = {FormData.postCode}
            onChange = {handleChange}
            className = 'formInput'
            required
            />
          </label>
          
          <br/><br/>

          <label className= 'register-form'>Country
          <input
            type= 'text'
            name = 'country'
            id = 'country'
            value = {FormData.country}
            onChange = {handleChange}
            className = 'formInput'
            required
            />
          </label>

          <br/><br/>
          <hr />
          <br/><br/>

          <button onClick={ onSignupClicked }>
            Sign up
            </button>

          <button onClick = { () => navigate('/login') }>
            Login
          </button>
        </form>
      </div>



    </>
  )
}

export default Register