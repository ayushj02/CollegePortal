import React, { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './styling/Notices.scss'

const Notices = (props) => {
  const [fname, setFname] = useState('')
    const [title, setTitle] = useState('')
    const [notice,setNotice] = useState([])
    const [description, setDescription] = useState('')

    const navigate = useNavigate();

    async function getNotices() {
      const response = await fetch(`http://localhost:1337/getNotice`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      console.log(json);
      setNotice(json);
    }
  

    async function createNotice(event){
        event.preventDefault()

        const response = await fetch('http://localhost:1337/createNotice', {
            method : 'POST',
            headers : {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
              fname,
              title,
              description
            })
          })
  
          const data = await response.json()

          if(data.status === 'ok'){
            console.log(data)
            setTitle("")
            setDescription("")
            alert("Notice Created Successfully")
            getNotices()
            }else{
              alert(Error)
            }
    }

    useEffect(() => {
      if(!localStorage.getItem('token')){
        navigate('/login')
      }else{
        getNotices()
      }
    }, [])
  return (
    <div>
        {/* <form onSubmit={createNotice}>
            <input type="text" value={fname} onChange = {(e) => setFname(e.target.value)} placeholder='Enter Title' />
            <input type="text" value={title} onChange = {(e) => setTitle(e.target.value)} placeholder='Enter Title' />
            <input type="text" value={description} onChange = {(e) => setDescription(e.target.value)} placeholder='Enter Description' />
            <input type="submit" value="Create Notice" />
        </form> */}

       
<div class="content">
    
    <div class="container mt-5">

      
      <div class="row justify-content-center">
        <div class="col-md-10">
          
          <div class="row align-items-center">
            <div class="col-lg-7 mb-5 mb-lg-0">

              <h2 class="mb-5">Create a Notice</h2>

              <form class="border-right pr-5 mb-5" onSubmit={createNotice}>
                <div class="row">
                  <div class="col-md-12 mb-3 form-group">
                    <input type="text" class="form-control" value={fname} onChange = {(e) => setFname(e.target.value)} placeholder="Faculty Name"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 mb-3 form-group">
                    <input type="text" class="form-control" value={title} onChange = {(e) => setTitle(e.target.value)} placeholder="Title"/>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12 mb-3 form-group">
                    <textarea class="form-control" value={description} onChange = {(e) => setDescription(e.target.value)} cols="30" rows="7" placeholder="Notice Message"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <input type="submit" value="Create Notice" class="btn btn-primary rounded-3 py-2 px-4"/>
                    <span class="submitting"></span>
                  </div>
                </div>
              </form>

              <div id="form-message-warning mt-4"></div> 
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>

            </div>
            <div class="col-lg-4 ml-auto">
              <h3 class="mb-4">Previously Sent Notices</h3>
              <ul>
                  
              <div className="fcontent-section">
                <ul>
                  {notice.map((notices) => {
                    return (
                      <li className="adobe-product">
                        <div className="products">{notices.fname}</div>
                        <span className="status">
                          <span className="status-circle green" />
                          {notices.title}
                        </span>
                        <div className="button-wrapper">
                          <button className="content-button status-button open">
                            Read More
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
                    
                </ul>
              </div>
            </div>
          </div>
        </div>  
        </div>
      </div>
  </div>

    // </div>
  )
}

export default Notices