import React, { useState } from "react";

import "./Inicio.css";
import Footer from "../Footer/Footer";
import video1 from "../../assets/video/video1.mp4";
import video2 from "../../assets/video/video2.mp4";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import MidleBanner from "../MidleBanner/MidleBanner";
import Navbar from "./Navbar";

import a from '../../assets/files/Explotado_plano.PDF';
import b from '../../assets/files/Pieza1.PDF';
import c from '../../assets/files/Pieza2.PDF';
import d from '../../assets/files/Pieza3.PDF';
import e from '../../assets/files/Pieza4.PDF';
import f from '../../assets/files/Laser_Pointer_Switch.zip';
import g from '../../assets/files/Pieza_Base.jpeg'
import { useEffect } from "react";

function Inicio() {
  const [text, setText] = useState(false);
  const[span, setSpan] = useState(null);
  
  const handleShowText=()=>{
    span.style.display ='block';
    setText(true);
  }

  const handleHideText=()=>{
    span.style.display ='none';
    setText(false);
  }
 
  useEffect(()=>{
    setSpan(document.querySelector('.tag-text'));
  },[span])

  return (
    <>
      <div className="blackg">
        <Navbar />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-content">
                <div class="main-banner">
                  <div class="row">
                    <div class="col-lg-7">
                      <div class="header-text">
                        <h6 style={{color:"#575757ec"}}>Sistema eficiente de verificación del agua</h6>
                        <h1 style={{color:"#575757ec"}}>
                          Más <em>Agua</em> Limpia{" "}
                        </h1>
                        <h4 style={{ marginTop: "-2rem" }}>
                          más <em>Vida</em>
                        </h4>

                        <div class="row buton-inicio justify-content-start">
                          <div class="col-12 col-md-3">
                            <Link to="/muestras">
                              <button class="css-button-gradient--1">
                                <a href="">Muestras</a>
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
                    <hr
                      class="mb-4 mt-0   "
                      style={{
                        width: "300px",
                        backgroundColor: "#000",
                        height: "4px",
                      }}
                    />
                    <p class="lead fw-normal text-muted">
                      Es un proyecto de sustentabilidad que tiene como objetivo
                      ayudar en el diágnostico de la calidad de agua, tanto en
                      entornos naturales, como agua para consumo.
                      <span className="tag-text">
                        {" "}
                        Consta de un <span className="tag">kit</span> que
                        contine un puntero láser y un{" "}
                        <span className="tag">switch</span> para mantener
                        prendido este, una <span className="tag">jeringa</span>{" "}
                        que contendrá la muestra de agua a analizar, un soporte
                        que permita colocar el láser y la jeringa en una
                        posición precisa para que la amplificación de la gota de
                        agua sea óptima. Luego la imagen preyectada es analizada
                        por medio de esta apliación web, y determina si hay
                        presencia, o no, de microorganismos o bacterias en esa
                        muestra de agua.
                      </span>
                      {text !== true && (
                        <span className="text-show" onClick={handleShowText}>
                          {" "}
                          Mostrar mas...
                        </span>
                      )}
                      {text && (
                        <span className="text-show" onClick={handleHideText}>
                          {" "}
                          Mostrar menos...
                        </span>
                      )}
                    </p>
                  </div>
                  <div class="col-sm-8 col-md-6">
                    <video className="img-fluid" controls>
                      <source src={video1} type="video/mp4" />
                    </video>
                  </div>

                  <div class="col-12 col-lg-6 column-1">
                    <video className="img-fluid mt-4" controls>
                      <source src={video2} type="video/mp4" />
                    </video>
                  </div>
                  <div class="col-sm-8 col-md-5 column-2">
                    <h2 class="display-4 lh-1 mb-4">Podes hacerlo vos mismo</h2>
                    <p class="lead fw-normal text-muted">
                      Descarga los planos en formato PDF para elaborar tu propia
                      herramienta de medición:
                    </p>
                    <div>
                      <a
                        type="button"
                        href={a}
                        className="boton-descarga"
                        download="Explotado Plano"
                      >
                      <h6> Explotado plano</h6>
                       
                      </a>
                      <a
                        type="button"
                        href={g}
                        className="boton-descarga"
                        download="Pieza Base"
                      >
                      <h6>Pieza Base</h6>
                       
                      </a>
                      <a
                        type="button"
                        href={b}
                        className="boton-descarga"
                        download="Pieza Nº1"
                      >
                       <h6>Pieza Nº1</h6> 
                      </a>
                      <a
                        type="button"
                        href={c}
                        className="boton-descarga"
                        download="Pieza Nº2"
                      >
                       <h6> Pieza Nº2</h6>
                      </a>
                      <a
                        type="button"
                        href={d}
                        className="boton-descarga"
                        download="Pieza Nº3"
                      >
                       <h6> Pieza Nº3</h6>
                      </a>
                      <a
                        type="button"
                        href={e}
                        className="boton-descarga"
                        download="Pieza Nº4"
                      >
                        <h6>Pieza Nº4</h6>
                      </a>
                      <a
                        type="button"
                        href={f}
                        className="boton-descarga"
                        download="Switch Laser"
                      >
                       <h6>Switch Laser</h6> 
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <MidleBanner />
        <Footer />
      </div>
    </>
  );
}

export default Inicio;
