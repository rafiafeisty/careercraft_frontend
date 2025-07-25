import React, { useRef } from 'react';
import './Home.css';

const Home = ({ onSearch }) => {
  const buttonref = useRef(null);

  const scroll = (direction) => {
    if (buttonref.current) {
      const scrollamount = 200;
      if (direction === "left") {
        buttonref.current.scrollBy({ left: -scrollamount, behavior: 'smooth' });
      } else {
        buttonref.current.scrollBy({ left: scrollamount, behavior: 'smooth' });
      }
    }
  };

  const search = () => {
    const query = document.getElementById('query').value;
    if (!query.trim()) {
      alert("Please enter a search query");
      return;
    }
    onSearch(query.trim());
  };
  const searchbtn = (query) => {
    if (!query.trim()) {
      alert("Please enter a search query");
      return;
    }
    onSearch(query.trim());
  };

  return (
    <>
      <div className="carousel">
        <div className="content2">
          <p>
            Search, Apply and Get your <span className="dream">Dream Jobs</span>
          </p>
        </div>
        <div className="form-group">
          <input type="text" id="query" />
          <button className="search" onClick={search}>Search</button>
        </div>
      </div>
      <div className="navigator">
        <a href="#" className="previous round a" onClick={() => scroll('left')}>&#8249;</a>
        <div className="navigator-buttons" ref={buttonref}>
          <button onClick={() => searchbtn("Web developer")}>Web development</button>
          <button onClick={() => searchbtn("Machine Learning")}>AI / ML</button>
          <button onClick={() => searchbtn("Frontend")}>Frontend</button>
          <button onClick={() => searchbtn("Backend")}>Backend</button>
          <button onClick={() => searchbtn("Django")}>Django</button>
          <button onClick={() => searchbtn("Python")}>Python</button>
        </div>
        <a href="#" className="next round a" onClick={() => scroll('right')}>&#8250;</a>
      </div>
    </>
  );
};

export default Home;
