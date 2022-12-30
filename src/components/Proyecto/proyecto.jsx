import React from "react";
import "./proyecto.css";
import { CircularProgressbar } from "react-circular-progressbar";
import GradientSVG from "./gradientSVG";
import { Link } from "react-router-dom";

import Cloud from "../../assets/img/cloud.png"

function proyecto() {
  const idCSS = "hello";
  const percentage = 60;
  return (
    <>
      <div className="blackg">
        <div style={{ marginTop: "6rem" }} class="container">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Más Agua Limpia más Vida</h1>
          </div>

          <div class="row">
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        Nombre
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-user fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        style={{ color: "#930ee4" }}
                        class="text-xs font-weight-bold  text-uppercase mb-1"
                      >
                        Respuesta Pendiente
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        Latitud
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-question fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        style={{ color: "#930ee4" }}
                        class="text-xs font-weight-bold  text-uppercase mb-1"
                      >
                        Respuesta Pendiente
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        Longitud
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-question fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Columna Izquierda */}
          <div class="row">
            <div class="col-xl-8 col-lg-7">
              <div class="card card-glass shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 style={{ color: "#930ee4" }} class="m-0 font-weight-bold">
                    Lorem Ipsum
                  </h6>
                  <div class="dropdown no-arrow"></div>
                </div>

                <div class="card-body">
                  <div class="chart-area">
                  <div  class="row justify-content-center d-flex align-items-center ">
                          <div class="col-5 col-md-3">
                            <a><i style={{marginTop:"3rem"}} class="fas fa-cloud-arrow-up fa-5x text-gray-300"></i></a>
                          </div>
                          <div class="col-5 col-md-3">
                            
                          <a><i style={{marginTop:"3rem"}} class="fas  fa-camera fa-5x text-gray-300 "></i></a>
                          
                          </div>
                        </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha */}
            <div class="col-xl-4 col-lg-5">
              <div class="card card-glass shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6
                    style={{ color: "#930ee4" }}
                    class="m-0 font-weight-bold "
                  >
                    lorem ipsum
                  </h6>
                  <div class="dropdown no-arrow"></div>
                </div>

                <div class="card-body">
                  <div class="mt-4 text-center small">
                    {/* los gráficos van acá */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="blackg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-center">
              <h1 className="text-center title">Más Agua Limpia más Vida. </h1>
            </div>

            <section>
              <div class="container px-5 mt-4">
                <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                  <div class="col-12 col-lg-6">
                    <div className=" d-flex justify-content-center">
                      <p className="lead fw-normal text-muted">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the indus{" "}
                      </p>
                    </div>

                    <div
                      style={{ paddingBottom: "18rem" }}
                      class="card card-shadown text-white"
                    >
                      <div class="card-body">
                        <h5 class="card-title text-light">
                          Lorem Ipsum is simply dummy text of the printing
                        </h5>

                        <div class="dropdown">
                          <button
                            class="btn btn-secondary dropdown-toggle myButton mt-3"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown button
                          </button>
                          <ul class="dropdown-menu ">
                            <li>
                              <a class="dropdown-item " href="#">
                                File
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Camara
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{ marginTop: "0.4rem" }}
                      class="card  text-white mb-4"
                    >
                      <div class="card-body">
                        <h5 class="card-title text-light d-flex justify-content-center">
                          Clasificación
                        </h5>
                        <div className="container">
                          <div className="row">
                            <div className="col-6">
                              <h6
                                style={{ marginLeft: "1rem" }}
                                className="text-light"
                              >
                                Nombre:
                              </h6>
                              <h6
                                style={{ marginLeft: "1rem" }}
                                className="text-light"
                              >
                                Latitud:
                              </h6>
                              <h6
                                style={{ marginLeft: "1rem" }}
                                className="text-light"
                              >
                                Longitud:
                              </h6>
                            </div>
                            <div className="col-6"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-8 col-md-6">
                    <div className="container">
                      <div className="row">
                        <div className="col-3"></div>
                        <div className="col-12 col-md-6 col-lg-6">
                          <div style={{ height: "240px", width: "240px" }}>
                            <GradientSVG />
                            <CircularProgressbar
                              strokeWidth={8}
                              value={percentage}
                              text={percentage}
                              styles={{
                                path: {
                                  stroke: `url(#${idCSS})`,
                                  height: "100%",
                                },
                                trail: {
                                  stroke: "#f2f2f2",
                                },
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="container">
                        <div className="row mt-3">
                          <div className="col-1"></div>
                          <div className="col-12 col-md-5 col-lg-5 mt-3">
                            <div style={{ height: "220px", width: "200px" }}>
                              <GradientSVG />
                              <CircularProgressbar
                                strokeWidth={8}
                                value={percentage}
                                text={percentage}
                                styles={{
                                  path: {
                                    stroke: `url(#${idCSS})`,
                                    height: "100%",
                                  },
                                  trail: {
                                    stroke: "#f2f2f2",
                                  },
                                }}
                              />
                            </div>
                          </div>

                          <div className="col-8 col-md-5 col-lg-5 mt-3">
                            <div style={{ height: "220px", width: "200px" }}>
                              <GradientSVG />
                              <CircularProgressbar
                                strokeWidth={8}
                                value={percentage}
                                text={percentage}
                                styles={{
                                  path: {
                                    stroke: `url(#${idCSS})`,
                                    height: "100%",
                                  },
                                  trail: {
                                    stroke: "#f2f2f2",
                                  },
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center button-map">
                      <Link to="/mapa">
                        <a href="" title="">
                          <button class="myButton">
                         
                          <i style={{marginRight:"0.3rem"}} class="fa-solid fa-location-dot "></i>
                            Ver Mapa
                          </button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </section>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default proyecto;
