import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const user_id = localStorage.getItem('userid');

        // frontend
const response = await fetch(`https://careercraft-backend.vercel.app/auth/apply?user_id=${user_id}`);


        const data = await response.json();
        if (response.ok) {
          setProfile(data);
        } else {
          console.error(data);
        }
      } catch (err) {
        console.error("Error fetching applied data:", err);
      }
    };

    fetchAppliedJobs();
  }, []);

  return (
    <>
      <div className="profile-container">
        <center>
          <h1 className="main-head">Your Profile (Applied Status)</h1>
        </center>

        <div className="username-display">
          <center>
            <h3>{username}</h3>
          </center>
        </div>

        <div className="profile-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Company Name</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {profile.length > 0 ? (
                profile.map((item, index) => (
                  <tr key={index}>
                    <td>{item.user_name}</td>
                    <td>{item.company_name}</td>
                    <td>{item.category}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: 'center' }}>
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Profile;
