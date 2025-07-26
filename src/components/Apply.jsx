import React from 'react';
import './Profile.css';
import { useLocation } from 'react-router-dom';

const Apply = () => {
  const location = useLocation();
  const id = location.state?.jobId; 

  const saving = async () => {
    const first = document.getElementById('first').value;
    const last = document.getElementById('last').value;
    const user_name = first + ' ' +last;
    console.log(user_name)
    const user_id=localStorage.getItem("userid")

    const response = await fetch('https://careercraft-backend.vercel.app/auth/portal');
    const data = await response.json();
    
    const filtered = data.find(item => item._id === id);
    if (!filtered) return;

    const company_name = filtered.company_name;
    const category = filtered.category;

    await fetch('https://careercraft-backend.vercel.app/auth/apply', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user_name, company_name, category ,user_id})
    });
    alert("Applied successfully")
  };

  return (
    <div className="apply-container">
      <center>
        <h1 className="main-head">Apply For Your Dream Job</h1>
      </center>
      <div className="apply-formgroup">
        <div className="form-row">
          <label htmlFor="first">First Name: *</label>
          <input type="text" id="first" />
        </div>
        <div className="form-row">
          <label htmlFor="last">Last Name: *</label>
          <input type="text" id="last" />
        </div>
        <div className="form-row">
          <label htmlFor="major">Major: *</label>
          <input type="text" id="major" />
        </div>
        <div className="cv">
          <label htmlFor="cv">Upload CV:</label>
          <input type="file" id="cv" />
        </div>
        <div className="submit-row">
          <button className="submit-btn" onClick={saving}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Apply;
