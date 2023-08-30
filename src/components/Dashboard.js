import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import NoticeBoard from './NoticeBoard';
import "./styling/Dashboard.scss";
import userLogo from "./styling/userLogo.png"

const Dashboard = () => {
  const navigate = useNavigate();
  const [notice, setNotice] = useState([]);

  function logout() {
    localStorage.removeItem("token"); //removes the token disabling the user from accessing the protected(dashboard) route
    navigate("/login");
  }

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

  //verifying its a legit user and loading
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      getNotices();
    }
  }, []);

  return (
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
              Apps
            </a>
            <a className="menu-link notify" href="#">
              TimeTable
            </a>
            <a className="menu-link" href="#">
              Upcoming Features
            </a>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search  " />
          </div>
          <div className="header-profile">
            <div className="notification">
              <span className="notification-number">3</span>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bell"
              >
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </div>
            <svg viewBox="0 0 512 512" fill="currentColor">
              <path d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z" />
            </svg>
            <img
              className="profile-img"
              src={userLogo}
              alt=""
            />
            <button className="logOut" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
        <div className="wrapper">
          <div className="main-container">
            <div className="content-wrapper">
              <div className="content-wrapper-header">
                <div className="content-wrapper-context">
                  <h1 className="img-content">Welcome User</h1>
                </div>
                15:47:20 pm
              </div>
              <div className="content-section">
                <div className="content-section-title">Notices</div>
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

              <div className="content-section">
                <div className="content-section-title">Notes</div>
                <div className="apps-card">
                  <div className="app-card">
                    <span>
                      <svg
                        viewBox="0 0 512 512"
                        style={{ border: "1px solid #a059a9" }}
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M480 0H32C14.368 0 0 14.368 0 32v448c0 17.664 14.368 32 32 32h448c17.664 0 32-14.336 32-32V32c0-17.632-14.336-32-32-32z"
                          fill="#210027"
                          data-original="#7b1fa2"
                        />
                        <g xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M192 64h-80c-8.832 0-16 7.168-16 16v352c0 8.832 7.168 16 16 16s16-7.168 16-16V256h64c52.928 0 96-43.072 96-96s-43.072-96-96-96zm0 160h-64V96h64c35.296 0 64 28.704 64 64s-28.704 64-64 64zM400 256h-32c-18.08 0-34.592 6.24-48 16.384V272c0-8.864-7.168-16-16-16s-16 7.136-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16v-96c0-26.464 21.536-48 48-48h32c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
                            fill="#f6e7fa"
                            data-original="#e1bee7"
                          />
                        </g>
                      </svg>
                      Linux Server Administration
                    </span>
                    <div className="app-card__subtext">
                      Demonstrate proficiency with the Linux cli, directory &
                      file management techniques,on most Linux distributions.
                    </div>
                    <div className="app-card-buttons">
                      <button className="content-button status-button">
                        Read
                      </button>
                      <div className="menu" />
                    </div>
                  </div>
                  <div className="app-card">
                    <span>
                      <svg
                        viewBox="0 0 52 52"
                        style={{ border: "1px solid #c1316d" }}
                      >
                        <g xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                            fill="#2f0015"
                            data-original="#6f2b41"
                          />
                          <path
                            d="M18.08 39H15.2V13.72l-2.64-.08V11h5.52v28zM27.68 19.4c1.173-.507 2.593-.761 4.26-.761s3.073.374 4.22 1.12V11h2.88v28c-2.293.32-4.414.48-6.36.48-1.947 0-3.707-.4-5.28-1.2-2.08-1.066-3.12-2.92-3.12-5.561v-7.56c0-2.799 1.133-4.719 3.4-5.759zm8.48 3.12c-1.387-.746-2.907-1.119-4.56-1.119-1.574 0-2.714.406-3.42 1.22-.707.813-1.06 1.847-1.06 3.1v7.12c0 1.227.44 2.188 1.32 2.88.96.719 2.146 1.079 3.56 1.079 1.413 0 2.8-.106 4.16-.319V22.52z"
                            fill="#e1c1cf"
                            data-original="#ff70bd"
                          />
                        </g>
                      </svg>
                      Artificial Intelligence
                    </span>
                    <div className="app-card__subtext">
                      Artificial Intelligence (AI) and accompanying tools and
                      techniques bring transformational changes in the world.
                    </div>
                    <div className="app-card-buttons">
                      <button className="content-button status-button">
                        Read
                      </button>
                      <div className="menu" />
                    </div>
                  </div>
                  <div className="app-card">
                    <span>
                      <svg
                        viewBox="0 0 52 52"
                        style={{ border: "1px solid #C75DEB" }}
                      >
                        <g xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                            fill="#3a3375"
                            data-original="#3a3375"
                          />
                          <path
                            d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z"
                            fill="#e4d1eb"
                            data-original="#e7adfb"
                          />
                        </g>
                      </svg>
                      Web Services
                    </span>
                    <div className="app-card__subtext">
                      To provide learners with the comprehensive and in-depth
                      knowledge of Web Services concepts and applications.
                    </div>
                    <div className="app-card-buttons">
                      <button className="content-button status-button">
                        Read
                      </button>
                      <div className="menu" />
                    </div>
                  </div>
                  <div className="app-card">
                    <span>
                      <svg
                        viewBox="0 0 512 512"
                        style={{ border: "1px solid #a059a9" }}
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M480 0H32C14.368 0 0 14.368 0 32v448c0 17.664 14.368 32 32 32h448c17.664 0 32-14.336 32-32V32c0-17.632-14.336-32-32-32z"
                          fill="#210027"
                          data-original="#7b1fa2"
                        />
                        <g xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M192 64h-80c-8.832 0-16 7.168-16 16v352c0 8.832 7.168 16 16 16s16-7.168 16-16V256h64c52.928 0 96-43.072 96-96s-43.072-96-96-96zm0 160h-64V96h64c35.296 0 64 28.704 64 64s-28.704 64-64 64zM400 256h-32c-18.08 0-34.592 6.24-48 16.384V272c0-8.864-7.168-16-16-16s-16 7.136-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16v-96c0-26.464 21.536-48 48-48h32c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
                            fill="#f6e7fa"
                            data-original="#e1bee7"
                          />
                        </g>
                      </svg>
                      Informational Network Security
                    </span>
                    <div className="app-card__subtext">
                      To provide students with knowledge of basic concepts of
                      computer security and
                      cryptography.
                    </div>
                    <div className="app-card-buttons">
                      <button className="content-button status-button">
                        Read
                      </button>
                      <div className="menu" />
                    </div>
                  </div>
                  <div className="app-card">
                    <span>
                      <svg
                        viewBox="0 0 512 512"
                        style={{ border: "1px solid #a059a9" }}
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M480 0H32C14.368 0 0 14.368 0 32v448c0 17.664 14.368 32 32 32h448c17.664 0 32-14.336 32-32V32c0-17.632-14.336-32-32-32z"
                          fill="#210027"
                          data-original="#7b1fa2"
                        />
                        <g xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M192 64h-80c-8.832 0-16 7.168-16 16v352c0 8.832 7.168 16 16 16s16-7.168 16-16V256h64c52.928 0 96-43.072 96-96s-43.072-96-96-96zm0 160h-64V96h64c35.296 0 64 28.704 64 64s-28.704 64-64 64zM400 256h-32c-18.08 0-34.592 6.24-48 16.384V272c0-8.864-7.168-16-16-16s-16 7.136-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16v-96c0-26.464 21.536-48 48-48h32c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
                            fill="#f6e7fa"
                            data-original="#e1bee7"
                          />
                        </g>
                      </svg>
                      Game Programming
                    </span>
                    <div className="app-card__subtext">
                      Learner should get the understanding computer Graphics
                      programming using Directx or Opengl.
                    </div>
                    <div className="app-card-buttons">
                      <button className="content-button status-button">
                        Read
                      </button>
                      <div className="menu" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay-app" />
      </div>
    </div>
  );
};

export default Dashboard;
