import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header2 = ({setloggedin}) => {
    const navigate=useNavigate()
  const Logout=()=>{
    setloggedin(false)
    alert("you have logged out")
    navigate('/')
  }
  const Profile=()=>{
    navigate('/profile')
  }
  return (
    <>
    <div className="header">
        <h1>CareerCraft</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/portal">Job Portal</a>
            <button onClick={Logout} className='login'>Logout</button>
            <button onClick={Profile} className='signup'>Profile</button>
        </div>
    </div>
    </>
  )
}

export default Header2
