import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const FacultyLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginFaculty(event) {
    event.preventDefault() //to prevent the forms behaviour to redirect to specified page on submission

    const response = await fetch('http://localhost:1337/facultyLogin', {
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
      navigate('/facultyHome')
    }else{
      alert('Check your username and password')
    }

    console.log(data)
}

  return (
    <>
      <div className="container">
	<div className="card">
		<div className="card-image">	
			<h2 className="card-heading">
				<small>Welcome Sir/Mam Login as a Faculty</small>
			</h2>
		</div>
		<form className="card-form" onSubmit={loginFaculty}>
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
			<p>A Student? <Link to='/login'>Login from here</Link></p>
			<p><Link to='/'>Back to Homepage</Link></p>
		</div>
	</div>
</div>

    </>
  )
}

export default FacultyLogin