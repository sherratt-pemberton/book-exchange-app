import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Register () {
  
  const navigate = useNavigate()

  const blankForm = {
    firstName:"",
    lastName:"",
    email:"",
    confirmEmail:"",
    password:"",
    confirmPassword:"",
    // address : {
    //   street:"",
    //   suburb:"",
    //   city:"",
    //   country:"",
    //   postCode:""
    // }
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
        <header classname="header">
          <h1>Register</h1>
        </header>

        <form onSubmit={handleSubmit} classname='form-Body'>
        <label calssName= 'register-form'>First name
          <input
            type= 'text'
            name = 'firstName'
            id = 'firstName'
            value = {FormData.firstName}
            onChange = {handleChange}
            classname = 'formInput'
            required
            />
          </label>
          
          <br/><br/>

          <label calssName= 'register-form'>Last name
          <input
            type= 'text'
            name = 'lastName'
            id = 'lastName'
            value = {FormData.lastName}
            onChange = {handleChange}
            classname = 'formInput'
            required
            />
          </label>
          
          <br/><br/>

          <label calssName= 'register-form'>Email
          <input
            type= 'text'
            name = 'email'
            id = 'email'
            value = {FormData.email}
            onChange = {handleChange}
            classname = 'formInput'
            required
            />
          </label>

          <br/><br/>

          <label calssName= 'register-form'>Confirm Email
          <input
            type= 'text'
            name = 'confirm-email'
            id = 'confirm-email'
            value = {FormData.confirmEmail}
            onChange = {handleChange}
            classname = 'formInput'
            required
            />
          </label>

          <br/><br/>

          <label calssName= 'register-form'>Password
          <input
            type= 'text'
            name = 'password'
            id = 'password'
            value = {FormData.password}
            onChange = {handleChange}
            classname = 'formInput'
            required
            />
          </label>
          
          <br/><br/>

          <label calssName= 'register-form'>Confirm password
          <input
            type= 'text'
            name = 'confirmPassword'
            id = 'confirmPassword'
            value = {FormData.confirmPassword}
            onChange = {handleChange}
            classname = 'formInput'
            required
            />
          </label>

          <br/><br/>
          <hr />
          {/* <br/><br/> */}
          
          
          {/* <label calssName= 'register-form'>Street
          <input
            type= 'text'
            name = 'street'
            id = 'street'
            value = {FormData.street}
            onChange = {handleChange}
            classname = 'formInput'
            required
            />
          </label>
          
          <br/><br/>

          <label calssName= 'register-form'>Suburb
          <input
            type= 'text'
            name = 'suburb'
            id = 'suburb'
            value = {FormData.suburb}
            onChange = {handleChange}
            classname = 'formInput'
            required
            />
          </label>
          
          <br/><br/>

          <label calssName= 'register-form'>City
          <input
            type= 'text'
            name = 'city'
            id = 'city'
            value = {FormData.city}
            onChange = {handleChange}
            classname = 'formInput'
            required
            />
          </label>

          <br/><br/>
          
          <label calssName= 'register-form'>PostCode
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

          <label calssName= 'register-form'>Country
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

          <br/><br/>

          <button dissabled = { (formData.email != formData.confirmEmail) && 
                                (formData.password != formData.confirmPassword) } 
                  onClick={ onSignupClicked }>
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