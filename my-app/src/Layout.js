import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./navbar.css";
import { AiOutlineSearch } from "react-icons/ai";


const Layout = () => {                                            
  const [searchQuery, setSearchQuery] = useState("");                             
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));                
    if (user) setLoggedInUser(user);  
  }, []);
  //
  const handleSearch = (e) => {
    e.preventDefault();
  };
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/login");
    window.location.reload();
  };
  //visitor count
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    let count = parseInt(localStorage.getItem("visitorCount")) || 0;

    if (!sessionStorage.getItem("visited")) {
      count += 1;
      localStorage.setItem("visitorCount", count);
      sessionStorage.setItem("visited", "true");
    }
    setVisitorCount(count);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="/logo.jpg" width="50px" height="50px" alt="Logo" />
            <h7 style={{float:'right', fontSize:'1rem', paddingTop:'15px', fontFamily:'Bungee Shade'}}>Marverick Dresses</h7>
          </Link>
            
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <form
              className="d-flex mx-auto"
              style={{ maxWidth: "500px", width: "100%" }}
              onSubmit={handleSearch}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}  
              />
              <button className="btn btn-outline-light" type="submit" onClick={() => navigate("/categories")}>
                <AiOutlineSearch />
              </button> 
            </form>

            <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
              <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  All Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/feedback">
                  Feedback
                </Link>
              </li>

              {loggedInUser ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Hello {loggedInUser.username}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={handleLogout}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                
              )}
              <li className="nav-item" style={{ paddingLeft: "2rem"}}>
                <span className="visitor-count text-white me-3">
                    Visitors: {visitorCount}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <Outlet context={{ searchQuery }} />
      </div>
    </>
  );
};

export default Layout;
