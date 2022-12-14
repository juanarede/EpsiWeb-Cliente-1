import React from "react";

import "./Inicio.css";
import Footer from "../Footer/Footer";
import video1 from "../../assets/video/video1.mp4";
import video2 from "../../assets/video/video2.mp4";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


function Inicio() {

  return (
    <>
      <div className="blackg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-content">
                <div class="main-banner">
                  <div class="row">
                    <div class="col-lg-7">
                      <div class="header-text">
                        <h6>lorem ipsum</h6>
                        <h4>
                          Más <em>Agua</em> Limpia{" "}
                        </h4>
                        <h4 style={{ marginTop: "-2rem" }}>
                          más <em>Vida</em>
                        </h4>
               

                        <div class="row buton-inicio justify-content-start">
                          <div class="col-12 col-md-3">
                            <button class="css-button-gradient--1">
                              <a href="#proyecto">Proyecto</a>
                            </button>
                          </div>
                          <div class="col-12 col-md-3">
                            <Link to="/proyecto">
                              <button class="css-button-gradient--1">
                                <a href="">Comenzar</a>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "6rem" }} className="container-fluid">
          <div className="row">
            <section id="proyecto" class="bg-light mt-4">
              <div class="container px-5 mt-4">
                <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                  <div class="col-12 col-lg-5">
                    <h2 class="display-4 lh-1 mb-4">
                      ¿De qué se trata el proyecto?{" "}
                    </h2>
                    <p class="lead fw-normal text-muted">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s,Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever
                      since the 1500s,Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s,
                    </p>
                  </div>
                  <div class="col-sm-8 col-md-6">
                    <video className="img-fluid" controls>
                      <source src={video1} type="video/mp4" />
                    </video>
                    <video className="img-fluid mt-4" controls>
                      <source src={video2} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <div
                style={{ marginBottom: "3rem" }}
                class="container px-5 mt-4 "
              >
                <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                  <div class="col-12 col-lg-5"></div>
                  <div class="col-sm-8 col-md-6"></div>
                </div>
              </div>
              <div className="footer">
              <Footer/>
              </div>
            </section>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Inicio;
