import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Detail from "./components/Detail";
import Apply from "./components/Apply";
import JobPortal from "./components/JobPortal";

function App() {
  const [islogged, setloggedin] = useState(() => {
    const saved = localStorage.getItem("isLoggedIn");
    return saved === "true";
  });
  const [job,setjob]=useState([])
  const [filteredjob,setfilteredjob]=useState([])

  useEffect(() => {
    localStorage.setItem("isLoggedIn", islogged);
  }, [islogged]);

  useEffect(() => {
  const fetchjobs = async () => {
    const response = await fetch('https://careercraft-backend.vercel.app/auth/portal');
    const data = await response.json();
    setjob(data);
    setfilteredjob(data);
  };
  fetchjobs();
}, []);

  const handleseach = (query) => {
  const filtered = job.filter((item) =>
    item.company_name.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );
  setfilteredjob(filtered);
};


  return (
    <Router>
      {islogged ? <Header2 setloggedin={setloggedin} /> : <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home onSearch={handleseach}/>
              <Cards jobList={filteredjob}/>
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setloggedin={setloggedin} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/apply"
          element={islogged ? <Apply /> : <Signup />}
        />

        <Route path="/portal" element={<JobPortal />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
