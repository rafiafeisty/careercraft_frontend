import React from 'react'
import './Card.css'
import { useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const Cards = ({jobList}) => {
  const navigate=useNavigate()
  const [job,setjob]=useState([])
  const details = (job) => {
  navigate('/detail', { state: { job } });
};

  const apply=(id)=>{
    navigate('/apply', { state: { jobId: id } });
  }
  return (
    <>
      <h1 className='h1'>Recent Jobs</h1>
      <div className="container-card">
        {jobList.slice(0,10).map((item,index)=>(
        <div className="card" key={index}>
          <div className="id-div">
            <p>{item._id}</p>
          </div>
          <div className="title">
            <h3>{item.company_name}</h3>
          </div>
          <div className="describe">
            <p>{item.description}</p>
          </div>
          <div className="category">
            <h5>Category: </h5>
            <p>{item.category}</p>
          </div>
          <div className="button-group">
            <button className="detail"  onClick={() => details(item)}>Details</button>
            <button className="apply" onClick={()=>apply(item._id)}>Apply</button>
          </div>
        </div>
        ))}
      </div>
    </>
  )
}

export default Cards
