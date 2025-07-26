import React from 'react'
import './Profile.css'
import { useNavigate, useLocation } from 'react-router-dom'

const Detail = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const job = state?.job

  const apply = () => {
    navigate('/apply', { state: { jobId: job._id } })
  }

  return (
    <>
      <div className="detail-container">
        <center>
          <h1 className="main-head">Details</h1>
        </center>
        <div className="detail-box">
          <div className="company-name">
            <h3>Company Name: </h3>
            <p>{job?.company_name}</p>
          </div>
          <div className="job-decsription">
            <h3>Description: </h3>
            <p>{job?.description}</p>
          </div>
          <div className="category-apply">
            <h3>Category: </h3>
            <p>{job?.category}</p>
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
