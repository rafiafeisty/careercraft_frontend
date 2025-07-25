import React from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate()
  const Login=()=>{
    navigate('/Login')
  }
  const Signup=()=>{
    navigate('/Signup')
  }
  return (
    <>
    <div className="header">
        <h1>CareerCraft</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/portal">Job Portal</a>
            <button onClick={Login} className='login'>Login</button>
            <button onClick={Signup} className='signup'>Signup</button>
        </div>
    </div>
    </>
  )
}

export default Header
