
import { AppBar } from "@mui/material";
import React, { useState } from "react"; 
import { Link } from "react-router-dom";






function Navbar() {
 

  const [navbarScroll, setNavbarScroll] = useState (false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
       <AppBar
        sx={
          navbarScroll
            ? {
                backgroundColor: "#000",
                transition: "0.3s",
                width: "100%",
              }
            : {
                backgroundColor: "#000" ? "#000" : "#000",
                boxShadow: 0,
                transition: "0.3s",
                width: "100%",
              }
        }
        className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
        id="mainNav"
      >
        <div className="container d-flex justify-content-start navegacion">
          <a className="navbar-brand fw-bold" href="#page-top" title="Top-Page">
          <Link to="/" style={{ marginTop:"0.3rem", color:"#fff"}}>Logo</Link>  
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{color:"#fff"}}
            
          >
            Menu
            <i className="bi-list"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className=" navbar-nav ms-auto me-4 my-3 my-lg-0">
            
              <li
                style={{ paddingTop: "0.3rem" }}
                className="nav-item"
              >
             <Link to="/proyecto">
                <a href="" title="">
                  <button class="myButton" >
                    <i class="bi bi-chat-dots"></i>
                    Empezar
                  </button>
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </AppBar>
  
     
   
    </>
  );
}

export default Navbar;
