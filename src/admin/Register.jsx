import React, { useState } from 'react'
import "./signup.css"
import axios from 'axios'
import baseUrl from '../baseUrl'

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`${baseUrl}/register`, {username, password})
        .then(result => console.log(result))
        .catch((err) => console.log(err))

        setUsername("")
        setPassword("")
    }

  return (
    <div className='login-container'>
        <div className='welcome-text'>
        <h1>Register</h1>
        </div>
        <div className='form-container'>

        <form onSubmit={handleSubmit} className='input-container'>
          <label>Username</label>
        <input 
        type="text"
        value = {username}
        onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input 
        type='password'
        value = {password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign Up</button>
        </form>
        </div>
    </div>
  )
}

export default Register