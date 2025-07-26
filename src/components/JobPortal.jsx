import React from 'react'
import './Jobportal.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const JobPortal = () => {
  const navigate = useNavigate()
  const [job, setjob] = useState([])
  const details = () => {
    navigate('/detail')
  }
  const apply = (id) => {
    navigate('/apply', { state: { jobId: id } });
  }
  const getdata = async () => {
    const response = await fetch('https://careercraft-backend.vercel.app/auth/portal')
    const data = await response.json()
    setjob(data)
  }
  useEffect(() => {
    getdata()
  }, [])

  const query = async (value) => {
    const response = await fetch('https://careercraft-backend.vercel.app/auth/portal');
    const data = await response.json();
    setjob(
      data.filter(item =>
        item.category && item.category.toLowerCase().includes(value.toLowerCase())
      )
    );
  }
  return (
    <>
      <div className="jobportal-container">
        <center>
          <h1 className="main-head">Job Portal</h1>
        </center>
        <div className="big-container">
          <div className="side-container">
            <div className="category-listing">
              <div className="catgory-btn-links">
                <button onClick={() => query("Web Development")}>Wev development</button>
                <button onClick={() => query("Machine Learning")}>AI / ML</button>
                <button onClick={() => query("Frontend")}>Frontend</button>
                <button onClick={() => query("Backend")}>Backend</button>
                <button onClick={() => query("Django")}>Django</button>
                <button onClick={() => query("Python")}>Python</button>
              </div>
            </div>
          </div>
          <div className="cards">
            {job.length > 0 ? (
              job.map((j, index) => (
                <div className="container-card" key={index}>
                  <div className="card-portal">
                    <div className="id-div">
                      <p>{j._id}</p>
                    </div>
                    <div className="title">
                      <h3>{j.company_name}</h3>
                    </div>
                    <div className="describe">
                      <p>{j.description}</p>
                    </div>
                    <div className="category">
                      <h5>Category: </h5>
                      <p>{j.category}</p>
                    </div>
                    <div className="button-group">
                      <button className="detail" onClick={details}>Details</button>
                      <button className="apply" onClick={()=>apply(j._id)}>Apply</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ marginLeft: "2rem" }}>Loading jobs...</p>
            )}
          </div>

        </div>
      </div>
    </>
  )
}

export default JobPortal
