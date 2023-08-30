import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styling/register.scss";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Contacting Backend
  async function registerUser(event) {
    event.preventDefault(); //to prevent the forms behaviour to redirect to specified page on submission

    const response = await fetch("http://localhost:1337/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      navigate("/login");
    } 
  }

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-image">
            <h2 className="card-heading">
              Get started
              <small>Let us create your account</small>
            </h2>
          </div>
          <form className="card-form" onSubmit={registerUser}>
            <div className="input">
              <input
                type="text"
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className="input-label">Full name</label>
            </div>
            <div className="input">
              <input
                type="text"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="input-label">Email</label>
            </div>
            <div className="input">
              <input  
                type="password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="input-label">Password</label>
            </div>
            <div className="action">
              <button className="action-button" type="submit">
                Get started
              </button>
            </div>
          </form>
          <div className="card-info">
            <p>
              Already Have an Account? <Link to="/login">Login</Link>
            </p>
            <p><Link to='/'>Back to Homepage</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;