import React, { useEffect } from "react";
import "./Clasificador.css";
import { useState, useRef, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import * as ml5 from "ml5";
import Mapa from "../../mapa/Mapa";
import Modal from "react-bootstrap/Modal";
import Sidebar from "../Sidebar/Sidebar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Logo from "../../assets/img/Logo.png";
import webcam from "../../assets/img/camara-web.png";
import { locateContext } from "../../context/locateContext";




function Clasificador() {
  //Geolocate
  const locate = useContext(locateContext);

  //Image Classifier
  const [imageURL, setImageURL] = useState(null);
  const [identify, setIdentify] = useState(false);
  //Tags
  const [tagOne, setTagOne] = useState(null);
  const [tagTwo, setTagTwo] = useState(null);
  const [tagThree, setTagThree] = useState(null);
  const [confOne, setConfOne] = useState(null);
  const [confTwo, setConfTwo] = useState(null);
  const [confThree, setConfThree] = useState(null);
  const [latitud, setLatitud] = useState(null)
  const [longitud, setLongitud] = useState(null)
  const imageRef = useRef();

  //Video
  const cameraRef = useRef();
  const [video, setVideo] = useState();
  const [canvas, setCanvas] = useState(false);
  const videoRef = useRef();
  const canvasRef = useRef();

  //Image Container
  const [history, setHistory] = useState([]);

  /////Modal/////
  const [show, setShow] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);

  const handleClose = () => {
    setShow(false);
    setOpenVideo(false);
  };
  const handleShow = () => setShow(true);
  const handleOpenVideo = () => setOpenVideo(true);

  ///////////////

  const submitRef = useRef();
  const uploadRef = useRef();

  


  //Model Load, Callback second argument
  const classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/y8n73XnCI/model.json",
    modelReady
  );

  //Callback
  function modelReady() {
    console.log("Modelo listo");
    if (identify != false) {
      classifier.predict(imageRef.current, getResults);
    }
    if (identify !== false && canvas !== false) {
      classifier.predict(canvasRef.current, getResults);
    }
  }

  //Results Listing
  function getResults(error, results) {
    if (error) {
      console.log(error);
    } else {
      console.log(results);
      if (results[0].label === "levadura") {
        setTagOne("bacteria");
        setTagTwo(results[1].label);
        setConfOne(results[0].confidence * 100);
        setConfTwo(results[1].confidence * 100);
      }
      if (results[1].label === "levadura") {
        setTagOne(results[0].label);
        setTagTwo("bacteria");
        setConfOne(results[0].confidence * 100);
        setConfTwo(results[1].confidence * 100);
      }
      if (results.length > 2) {
        setTagOne(results[0].label);
        setTagTwo(results[1].label);
        setTagThree(results[2].label);
        setConfOne(results[0].confidence * 100);
        setConfTwo(results[1].confidence * 100);
        setConfThree(results[2].confidence * 100);
      }
    }
  }

  //Subir imagen
  const uploadImage = (e) => {
    setCanvas(false);
    const { files } = e.target;

    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
      setCanvas(false);
    } else {
      setImageURL(null);
    }
  };

  //identificador de imagen
  const handleIndentify = () => {
    setIdentify(true);
    const Toast = Swal.mixin({
      toast: true,
      position: "center",
      showConfirmButton: false,
      timer: 6000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: "info",
      title: "Un momento por favor...",
    });
  };

  const sendData = async (e) => {
    e.preventDefault();
    setLatitud(locate[0])
    setLongitud(locate[1])
    const formData = new FormData();
    formData.append("longitud", locate[1]);
    formData.append("latitud", locate[0]);
    formData.append("label_1", tagOne);
    formData.append("conf_1", confOne);
    formData.append("label_2", tagTwo);
    formData.append("conf_2", confTwo);

    const payload = {
         latitud: latitud.toString(),
         longitud: longitud.toString(),
         label_1: tagOne.toString(),
         conf_1: confOne.toString(),
         label_2: tagTwo.toString(),
         conf_2: confTwo.toString()
    }

    //Envio de formulario a la API
    await axios
      .post(`https://msthompson-server.vercel.app/api/informes`, payload)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
      })
      .catch(err=>{
         const res = err.message
         console.log(res)
      });
  };

  //Reemplaza al boton del input para enviar la data a la DB
  const triggerSave = () => {
    submitRef.current.click();
  };

  const triggerUpload = () => {
    uploadRef.current.click();
  };

  const triggerCamera = () => {
    cameraRef.current.click();
  };

  //Web Cam Start
  const readyToUse = () => {
    setCanvas(true);
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          setVideo(document.getElementById("video-test"));
          video.srcObject = stream;
          console.log(stream);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("No tienes una camara disponible...");
    }
  };
  //Captura con la webcam
  function handleCapture() {
    const cnv = document.getElementById("cnv");
    const ctx = cnv.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, 200, 200);
    const src = cnv.toDataURL("image/jpeg", 1.0);
    setHistory([src, ...history]);
  }

  const deleteResources = () => {
    setHistory([]);
  };

  


  useEffect(() => {
   
    if (imageURL) {
      setHistory([imageURL, ...history]);
    }

    
  }, [imageURL]);

  return (
    <>
   
      <div className="blackg">
      <Sidebar/>
        <div style={{ marginTop: "8rem" }} className="container">
          <div className=" d-flex justify-content-center align-items-center mb-4">
            <h1 className="h3 mb-0 text-gray-800">Más Agua Limpia más Vida</h1>
          </div>
          {/* Nombre */}
          <div className="row">
            {/* Formulario para base de datos, esto no se visualiza */}
            <div className="dataSend">
              <form onSubmit={sendData}>
                <input type="hidden" value={locate[0]} />
                <input type="hidden" value={locate[1]}  />
                <input
                  type="hidden"
                  value={tagOne}
                  onChange={(event) => {
                    setTagOne(event.target.value);
                  }}
                />
                <input
                  type="hidden"
                  value={confOne}
                  onChange={(event) => {
                    setConfOne(event.target.value);
                  }}
                />
                <input
                  type="hidden"
                  value={tagTwo}
                  onChange={(event) => {
                    setTagTwo(event.target.value);
                  }}
                />
                <input
                  type="hidden"
                  value={confTwo}
                  onChange={(event) => {
                    setConfTwo(event.target.value);
                  }}
                />
                <input type="submit" value="Enviar datos" ref={submitRef} />
                {/* Se reemplaza funcionalidad de este submit */}
              </form>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <h2>Localización</h2>
            </div>

            {/* Columna Izquierda */}

            <div class=" buton-inicio d-flex justify-content-center align-items-center mb-4 responsive-boton ">
              <div class="col-12 col-md-3 col-lg-2">
                <input
                  accept="image/*"
                  className="upload-image"
                  type="file"
                  onChange={uploadImage}
                  ref={cameraRef}
                  id="fileInput"
                />
                {/* Boton de subir imagen */}
                <button
                  className="boton css-button-gradient--2 mt-2 btn-block"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Subir imagen / Utilizar camara"
                  style={{ cursor: "pointer" }}
                  onClick={triggerCamera}
                >
                  <i class=" fas fa-regular fa-camera"></i>
                  <h5 style={{ color: "#fff" }}>Capturar o Subir Imagen</h5>
                </button>
              </div>

              <div class="col-12 col-md-2 col-lg-2 d-none d-sm-block">
                {/* Boton de WebCam */}
                <button
                  className="css-button-gradient--2 mt-2 btn-block"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Utilizar Webcam"
                  style={{ cursor: "pointer" }}
                  onClick={handleOpenVideo}
                >
                  <img style={{ width: "2rem" }} src={webcam} alt=""></img>

                  <h5 style={{ color: "#fff" }}>Utilizar la WebCam</h5>
                </button>
              </div>

              {/* Modal del WebCam */}
              <Modal
                style={{ marginTop: "5rem" }}
                size="lg"
                show={openVideo}
                onHide={handleClose}
              >
                <Modal.Header className="bg-black">
                  <Modal.Title style={{ color: "#fff" }}>Web Cam</Modal.Title>
                  <button className="btn btn-danger" onClick={readyToUse}>
                    Iniciar
                  </button>
                </Modal.Header>
                <Modal.Body className="bg-black">
                  <video
                    id="video-test"
                    width={Modal.Body.width}
                    height={Modal.Body.height}
                    autoPlay={true}
                    ref={videoRef}
                  ></video>

                  <Modal.Footer className="d-flex justify-content-between">
                    <img style={{ width: "6rem" }} src={Logo} alt="logo" />
                    <button
                      className="css-button-gradient--1"
                      onClick={handleClose}
                    >
                      Cerrar
                    </button>

                    <button
                      className="btn btn-success"
                      id="shoot"
                      onClick={handleCapture}
                    >
                      Capturar
                    </button>
                  </Modal.Footer>
                </Modal.Body>
              </Modal>
            </div>

            {/* Localizacion en el orden LATITUD - LONGITUD */}

            <div className="d-flex justify-content-center align-items-center d-block responsive-boton ">
              <div className="col-12 col-xl-3 col-md-6 mb-4 ">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div
                          style={{ color: "#930ee4" }}
                          className="text-column columns-localizacion text-xs font-weight-bold  text-uppercase mb-1"
                        >
                          Respuesta Pendiente
                        </div>
                        <div className="  h5 mb-0 font-weight-bold text-gray-800">
                          Latitud {locate[0]}
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-regular fa-earth-americas fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className=" text-column text-xs font-weight-bold  text-uppercase mb-1">
                          Respuesta Pendiente
                        </div>
                        <div className="  h5 mb-0 font-weight-bold text-gray-800">
                          Longitud {locate[1]}
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-regular fa-earth-americas fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <div class="col-12 col-xl-3 col-md-6 mb-4 ">
                {/* Boton de mapa */}
                <button
                  type="button"
                  class="css-button-gradient--1 mt-2 btn-block"
                  onClick={handleShow}
                >
                  <i
                    style={{ marginRight: "0.5rem" }}
                    class="fas fa-location-dot fa-1x text-gray-300 "
                  ></i>
                  Ver Mapa
                </button>

                {/* Modal del mapa */}
                <Modal
                  style={{ marginTop: "5rem" }}
                  size="lg"
                  show={show}
                  onHide={handleClose}
                >
                  <Modal.Header className="bg-black">
                    <Modal.Title style={{ color: "#fff" }}>
                      Ubicación Aproximada
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="bg-black">
                    <div className="map-responsive">
                      <Mapa />
                    </div>

                    <Modal.Footer className="d-flex justify-content-between">
                      <img style={{ width: "6rem" }} src={Logo} alt="logo" />
                      <button
                        className="css-button-gradient--1"
                        onClick={handleClose}
                      >
                        Cerrar
                      </button>
                    </Modal.Footer>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
            <div className="row">
              <div className="col-3"></div>
              <div className="col-12 col-xl-3 col-md-6 mb-4"></div>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center text-center ">
            <div className="col-2"></div>
            <div class="col-12 col-md-4 col-lg-4 text-center mt-4">
              {/* Upload Image */}
              {imageURL && (
                <div className="imageHolder card-body">
                  <img
                    className="file-responsive"
                    src={imageURL}
                    alt="uploadPreview"
                    crossOrigin="anonymous"
                    ref={imageRef}
                  />
                  <button
                    className="css-button-gradient--1 mt-2"
                    onClick={handleIndentify}
                  >
                    <i
                      style={{ marginRight: "0.5rem " }}
                      className="fas fa-regular fa-bacterium fa-1x text-gray-300 "
                    />
                    Clasificar
                  </button>
                </div>
              )}
              
              {/* Captura Modal */}
              {canvas && (
                <div className="imageHolder card-body">
                  <canvas
                    id="cnv"
                    className="file-responsive"
                    ref={canvasRef}
                  ></canvas>
                  <button
                    className="css-button-gradient--1 mt-2"
                    onClick={handleIndentify}
                  >
                    <i
                      style={{ marginRight: "0.5rem " }}
                      className="fas fa-regular fa-bacterium fa-1x text-gray-300 "
                    />
                    Clasificar
                  </button>
                </div>
              )}

               {/* Boton para guardar los datos en la DB */}
              {tagOne !== null && (
                
              <button
              style={{ marginTop: "1rem", marginLeft:"11rem" }}
              className="css-button-gradient--1"
              onClick={triggerSave}
              
             >
              <i
                style={{ marginRight: "0.5rem " }}
                class=" fas fa-regular fa-floppy-disk"
              ></i>
              Guardar Datos
               </button>

               
               
              )}

              
            
            </div>

            <div className=" col-12 col-md-4 col-lg-4">
              {tagOne !== null && (
                <div className="row">
                  <div class=" graficos mb-4 col-xl-6 col-lg-5">
                    <div className=" text-center small">
                      {/* los gráficos van acá */}

                      <div className="row">
                        <div className="col-6 col-lg-6">
                          <div className="circular-bar">
                            <h6>{tagOne.toUpperCase()}</h6>

                            <CircularProgressbar
                              value={confOne.toFixed(2)}
                              text={`${confOne.toFixed(2)}%`}
                            />
                          </div>
 

                        </div>
                        

                        {/* <div className="col-6 col-lg-6">
                        <div className="circular-bar">
                          <h6>{tagTwo}</h6>
                          <CircularProgressbar
                            value={confTwo.toFixed(2)}
                            text={`${confTwo.toFixed(2)}%`}
                          />
                        </div>
                       </div> */}
                       
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Columna Derecha */}

          <div className="container">
            <div className="row mt-4">
              <div
                style={{ marginTop: "3rem" }}
                className="col-12 col-md-4 col-lg-4"
              >
                {/* Imagenes recientes */}
                {history.length > 0 && (
                  <div>
                    <h3>Imagenes Recientes</h3>{" "}
                    <button
                      className="btn btn-danger"
                      onClick={deleteResources}
                    >
                      Borrar Historial
                    </button>
                    <br />
                    <br />
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              {history.map((image, index) => {
                return (
                  <div
                    className="recent-Precitions img-horizontal col-12 col-md-1 col-lg-3"
                    key={`${image}${index}`}
                  >
                    <img
                      className="image-recent"
                      src={image}
                      alt="Recent Prediction"
                      onClick={() => {
                        setImageURL(image);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

        </div>
     
      </div>
    </>
  );
}

export default Clasificador;
