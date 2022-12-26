import React from "react";

import "./Inicio.css";

import video1 from "../../assets/video/video1.mp4"
import video2 from "../../assets/video/video2.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.min.css";




function inicio() {
  return (
    <>
     
      <div className="blackg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-center">
             <h1 className="text-center title">Más Agua Limpia más Vida. </h1>
            </div>
            <section class="bg-light mt-4">
            <div class="container px-5 mt-4">
                <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                    <div class="col-12 col-lg-5">
                        <h2 class="display-4 lh-1 mb-4">¿De qué se trata el proyecto? </h2>
                        <p class="lead fw-normal text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                    <div class="col-sm-8 col-md-6">
                    <video className="img-fluid" controls  >
                       <source src={video1} type="video/mp4"/>

                       </video>
                       <video   className="img-fluid mt-4" controls >
                       <source  src={video2} type="video/mp4"/>

                       </video>
                    </div>
                </div>
            </div>

            <div style={{marginBottom:"3rem"}} class="container px-5 mt-4 " >
                <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                <div class="col-12 col-lg-5">
                      
             
                      </div>
                    <div class="col-sm-8 col-md-6">
                    
                    </div>
                    
                </div>
            </div>
        </section>
        

          </div>
        </div>
      </div>
    </>
  );
}

export default inicio;
