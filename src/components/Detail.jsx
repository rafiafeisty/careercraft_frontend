import React from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom'

const Detail = () => {
  const navigate=useNavigate()
  const apply=()=>{
    navigate('/apply')
  }
  return (
    <>
      <div className="detail-container">
        <center>
          <h1 className="main-head">Details</h1>
        </center>
        <div className="detail-box">
          <div className="company-name">
            <h3>Copmany Name: </h3>
            <p>Name</p>
          </div>
          <div className="job-decsription">
            <h3>Description: </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officia asperiores, esse similique laudantium corporis ea illum facilis. Illum, vero?\ Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ut dolore, magni nam dolores tenetur soluta est, quasi labore totam reprehenderit possimus veniam non, hic qui ducimus architecto. Consequuntur laborum repudiandae rerum delectus quo modi sint, exercitationem voluptates veritatis asperiores.</p>
          </div>
          <div className="category-apply">
            <h3>Category: </h3>
            <p>Category</p>
          </div>
          <div className="apply-btn-div">
            <button className="apply-btn" onClick={apply}>Apply Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
