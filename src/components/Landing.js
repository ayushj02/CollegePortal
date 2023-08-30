import React from 'react'
import { Link } from 'react-router-dom'
import './styling/Landing.scss'
import heroImage from "./styling/heroImage.png"


const Landing = () => {
  return (
    <>
        <div>
      <br />
      <div className="dark-light">
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </div>
      <div className="app">
        <div className="header">
          <div className="header-menu">
            <a className="menu-link is-active" href="#">
              Welcome
            </a>
          </div>
          <div className="header-profile">
            <div className="notification">
             TCSC CS Portal
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="main-container">
            <div className="landing-wrapper">
              <div className="landing-wrapper-header">
                <div className="landing-wrapper-context">
                  <h1 className="lTitle">Welcome to TCSC CS Portal</h1>
                  <div className="content-text">
                   This is a Student Teacher Portal where student gets updates 
                  </div>
                  <div className="btns">
                <button className='flogbtn'>
                  <Link style={{textDecoration: 'none',color : "white"}} to='/facultyLogin'>
                    Faculty Login
                  </Link>
                </button>
                  <button className='logbtn'>
                  <Link style={{textDecoration: 'none',color : "white"}} to='/login'>
                    Login as a Student
                  </Link>
                </button>
                  </div>
                </div>
                <img
                  className="content-wrapper-img"
                  src={heroImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="overlay-app" />
      </div>
    </div>


    </>
  )
}

export default Landing