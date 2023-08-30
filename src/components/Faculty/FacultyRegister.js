import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const FacultyRegister = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Contacting Backend 
    async function registerFaculty(event) {
        event.preventDefault() //to prevent the forms behaviour to redirect to specified page on submission

        const response = await fetch('http://localhost:1337/registerFaculty', {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            name,
            gender,
            email,
            username,
            password
          })
        })

        const data = await response.json()

        if(data.status === 'ok'){
            console.log(data)
          navigate('/facultyLogin')
        }
    }
  return (
    <>
        <h1>Faculty Registeration</h1>
        <form onSubmit={registerFaculty}>
            <input type="text" value={name} onChange = {(e) => setName(e.target.value)} placeholder='Enter your Name' /><br />
            <input type="text" value={gender} onChange = {(e) => setGender(e.target.value)} placeholder='Enter your Gender' /><br />
            <input type="text" value={username} onChange = {(e) => setUsername(e.target.value)} placeholder='Set a Username' /><br />
            <input type="email" value={email} onChange = {(e) => setEmail(e.target.value)} placeholder='Enter your Email' /><br />
            <input type="password" value={password} onChange = {(e) => setPassword(e.target.value)} placeholder='Enter password' /><br />
            <input type="submit" value="Register" />
        </form>
    </>
  )
}

export default FacultyRegister