import React from "react";
import "./proyecto.css";
import { CircularProgressbar } from "react-circular-progressbar";
import GradientSVG from "./gradientSVG";
import { Link } from "react-router-dom";

function proyecto() {
  const idCSS = "hello";
  const percentage = 60;
  return (
    <>
      <div className="blackg">
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
      </div>
    </>
  );
}

export default proyecto;
