import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = ({setloggedin}) => {
  const navigate=useNavigate()
  const logged=async()=>{
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch('https://careercraft-backend.vercel.app/auth/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, })
      });

      const data = await response.json();
      if (response.ok) {
        alert("Congratulations on successful logging");
        setloggedin(true)
        localStorage.setItem("userid",data.userId)
        navigate('/');
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during logging");
    }
    }
  return (
    <>
      <div className="login-container">
        <center>
        <h1 className="heading">Login</h1>
        </center>
        <div className="form-group2">
          <div className="username">
            <label htmlFor="username">Username</label>
            <input type="email" id="username" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="submit">
          <button type='submit' class="submit-btn" onClick={logged}>Login</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login
