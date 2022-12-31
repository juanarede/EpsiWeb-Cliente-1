
import { AppBar } from "@mui/material";
import React,{useState} from "react"; 

import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.png"




function Navbar() {
  const [navbarScroll, setNavbarScroll] = useState(false);

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


{/* <nav class="navbar custom-navbar navbar-expand-md navbar-light fixed-top" data-spy="affix" data-offset-top="10">
        <div class="container">
        <Link to="/">
            <a class="navbar-brand" href="#">
                <img style={{width:"8rem"}} src={Logo} alt="logo"/>
            </a>
            </Link>
        </div>
    </nav> */}
        <AppBar
        sx={
          navbarScroll
            ? {
                backgroundColor: "#000",
                transition: "0.3s",
                width: "100%",
              }
            : {
                backgroundColor: "#000" ? "transparent" : "#000",
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
          <Link to="/" style={{ marginTop:"0.3rem", color:"#fff"}}> <img style={{width:"8rem"}} src={Logo} alt="logo"/></Link>  
          </a>
        </div>
      </AppBar>
   
     
   
    </>
  );
}

export default Navbar;
