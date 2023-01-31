import React from "react";
import "./Sidebar.css";

import { Link } from "react-router-dom";

function Siderbar() {
  return (
 <>
 <input type="checkbox" id="check"/>
    <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
        <header>M.A.L.M.V</header>
        <ul>
        <a href="#"><li> <Link to="/"><i class="fas fa-home "></i>Home</Link></li></a>
            <a href="#"><li> <Link to="/datos"><i class="fas fa-list "></i>Historial</Link></li></a>
          <a href="#"><li> <Link to="/clasificador"><i class="fas fa-bacterium "></i>Clasificación</Link></li></a>
           
        </ul>
    </div>
    </>
  );
}

export default Siderbar;
