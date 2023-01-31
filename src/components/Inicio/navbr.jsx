
import { AppBar } from "@mui/material";
import React from "react"; 

import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";

import "./Navbr.css";




function Navbar() {
  // const [navbarScroll, setNavbarScroll] = useState(false);

  // const changeBackground = () => {
  //   if (window.scrollY >= 80) {
  //     setNavbarScroll(true);
  //   } else {
  //     setNavbarScroll(false);
  //   }
  // };
  // window.addEventListener("scroll", changeBackground);

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
    <header>
        <div class="nav-wrapper">
            <div class="logo-container">
               <Link to="/"> <img  class="logo" src={Logo} alt="Logo"/></Link>
            </div>
            <nav>
                <input class="hidden" type="checkbox" id="menuToggle"/>
                <label class="menu-btn" for="menuToggle">
                    <div class="menu"></div>
                    <div class="menu"></div>
                    <div class="menu"></div>
                </label>
                <div class="nav-container">
                    <ul class="nav-tabs">
                <a href="#proyecto"> <li class="nav-tab">Proyecto</li> </a>
                {/* <a href="#planos" > <li class="nav-tab">Planos</li></a> */}
                <a href="#agradecimientos">  <li class="nav-tab">Agradecimientos</li></a>
                <Link to="/muestras">
                              <button style={{marginLeft:"1rem"}} class="css-button-gradient--1">
                                <a href="#">Muestras</a>
                              </button>
                            </Link>
           

                       
                       
                      
                       
                    </ul>
                </div>
            </nav>
        </div>
    </header>
   
    </>
  );
}

export default Navbar;
