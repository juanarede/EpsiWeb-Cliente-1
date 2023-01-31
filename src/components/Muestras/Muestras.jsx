import React from "react";
import Gif from "../../assets/img/micro-animado.gif";
import Siderbar from "../Sidebar/Sidebar";
import "./Muestras.css"


function Muestras() {
  return (
    <>
      <div className="bg-muestras">
        <Siderbar />
        <div class="container">
          <div class="row d-flex justify-content-center align-items-center">
            <div style={{marginTop:"6rem"}} class="col-sm-8 first-column ">
              <h2>Esto es lo que podrás ver...</h2>

              <img src={Gif} alt="gif-alt" className="img-fluid gif-muestras" />
              <h3>
                Seras testigo de la cantidad de bacterias y microorganismos que
                tiene el agua contaminada.
              </h3>
            </div>
         
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Muestras;
