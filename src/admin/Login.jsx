import React, {useState} from 'react'
import "./signup.css"
import axios from 'axios'
import baseUrl from '../baseUrl'
import {useNavigate} from 'react-router-dom' 

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()

      axios.post(`${baseUrl}/login`, {username, password}, { withCredentials: true } ) //fetches the endpoint
      .then(result => { //this is the result of the fetched endpoint
        if (result) {
          navigate('/admin')
        }
         
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='login-container'>
        <div className='welcome-text'>
        <h1>Hello Admin</h1>
        <p>welcome back</p>
        </div>
        <div className='form-container'>
        <form onSubmit = {handleSubmit} className='input-container'>
          <label>Username</label>
        <input 
        type="text"
        value = {username}
        onChange = {(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input 
        type='password'
        value = {password}
        onChange = {(e) => setPassword(e.target.value)}
        />
        <button>Verify</button>
        </form>
        </div>
    </div>
  )
}

export default Login