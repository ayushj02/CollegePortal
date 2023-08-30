import React from 'react'
import { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import './styling/login.scss'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //Contacting Backend 
  async function loginUser(event) {
      event.preventDefault() //to prevent the forms behaviour to redirect to specified page on submission

      const response = await fetch('http://localhost:1337/login', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          email,
          password
        })
      })

      const data = await response.json()

      if(data.user){
        localStorage.setItem('token', data.user)
        alert('login successful')
        navigate('/dashboard')
      }else{
        alert('Check your username and password')
      }

      console.log(data)
  }
return (
  <div>
      <div className="container">
	<div className="card">
		<div className="card-image">	
			<h2 className="card-heading">
				<small>Let's Login to the Portal</small>
			</h2>
		</div>
		<form className="card-form" onSubmit={loginUser}>
						<div className="input">
				<input type="text" className="input-field" value={email} onChange = {(e) => setEmail(e.target.value)} required/>
				<label className="input-label">Email</label>
			</div>
						<div className="input">
				<input type="password" className="input-field" value={password} onChange = {(e) => setPassword(e.target.value)} required/>
				<label className="input-label">Password</label>
			</div>
			<div className="action">
				<button className="action-button" type='submit'>Login</button>
			</div>
		</form>
		<div className="card-info">
			<p>Not Registered Yet? <Link to='/register'>Register</Link></p>
      <p><Link to='/'>Back to Homepage</Link></p>
		</div>
	</div>
</div>

  </div>
)

}

export default Login