import React from "react";
import "./Proyecto.css";
import { useState, useRef } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import * as ml5 from 'ml5';
import Mapa from "../../mapa/Mapa";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';






function Proyecto() {

  //Muestra el contenido de clasificacion
  const[start, setStart] = useState(false);
  const[btnDisplay, setBtnDisplay]= useState(true);
  
  //Geolocate
  const[latitud, setLatitud] = useState(null);
  const[longitud, setLongitud]= useState(null);
 
  //Image Classifier
  const[imageURL, setImageURL] = useState(null);
  const[identify,setIdentify] = useState(false);
    //Tags
    const[tagOne, setTagOne] = useState(null);
    const[tagTwo, setTagTwo] = useState(null);
    const[tagThree , setTagThree] = useState(null);
    const[confOne, setConfOne] = useState(null);
    const[confTwo, setConfTwo] = useState(null);
    const[confThree, setConfThree] = useState(null);
const imageRef = useRef();

////Loading Progress Bar/////
  //const[loading, setLoading] = useState(false);


  /////Modal/////
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  ///////////////

  const submitRef = useRef();
  


  //Condicional para Geolocalizacion
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((pos)=>{
        setLatitud(pos.coords.latitude);
        console.log(latitud);
        setLongitud(pos.coords.longitude);
        console.log(longitud);
    },(error)=>{
        switch(error.code){
            case error.PERMISSION_DENIED:
                console.log("El usuario denegó la solicitud")
                break;
            case error.POSITION_UNAVAILABLE:
                console.log("Localización no disponible")
                break;
            case error.TIMEOUT:
                console.log("Se agotó el tiempo de espera para la localizacion")
                break;
        }
    })
}else{
    console.log('Tu navegador no soporta geolocalizacion')
}

//Model Load, Callback second argument
const classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/y8n73XnCI/model.json', modelReady);

//Callback
function modelReady(){
  console.log('Modelo listo');
  if(identify != false){
  classifier.predict(imageRef.current, getResults);
  }
 }

//Results Listing 
function getResults(error, results){
  if(error){
   console.log(error);
  }else{
   console.log(results);
   if(results[0].label === "levadura"){
   setTagOne("bacteria");
   setTagTwo(results[1].label);
   setConfOne(results[0].confidence * 100);
   setConfTwo(results[1].confidence * 100);}
   if(results[1].label === "levadura"){
   setTagOne(results[0].label);
   setTagTwo("bacteria");
   setConfOne(results[0].confidence * 100);
   setConfTwo(results[1].confidence * 100); }
   if(results.length > 2 ){
   setTagOne(results[0].label);
   setTagTwo(results[1].label);
   setTagThree(results[2].label);
   setConfOne(results[0].confidence *100);
   setConfTwo(results[1].confidence *100);
   setConfThree(results[2].confidence * 100);
   }
  }
}

//Subir imagen
const uploadImage= (e)=>{
  const {files} = e.target;
  
  if(files.length > 0){
   const url = URL.createObjectURL(files[0]);
   setImageURL(url);
   
  }else{
   setImageURL(null);
  }
}

//identificador de imagen
const handleIndentify = ()=>{
  setIdentify(true);
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 6000,
    timerProgressBar: true,
    
  })
  
  Toast.fire({
    icon: 'info',
    title: 'Un momento por favor...'
  })
}

const sendData = async(e)=>{
e.preventDefault();

const formData = new FormData();

formData.append('latitud',latitud);
formData.append('longitud',longitud);
formData.append('label_1',tagOne);
formData.append('conf_1',confOne);
formData.append('label_2',tagTwo);
formData.append('conf_2',confTwo);

//Envio de formulario a la API
await axios.post(`http://127.0.0.1:8000/api/enviar`,formData).then(({data})=>{
  Swal.fire({
      icon:"success",
      text:data.message
  })

})
}

  const handleStart=()=>{
    setBtnDisplay(false);
    setStart(true);
  }

  //Reemplaza al boton del input para enviar la data a la DB
  const triggerSave= () =>{
      submitRef.current.click();
  }

 
  
  return (
    <>
    
       <div className="blackg">
      
    

        <div style={{ marginTop: "6rem" }} className="container">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Más Agua Limpia más Vida</h1>
          </div>
            {/* Nombre */}
          <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        Nombre
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-user fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              {/* Formulario para base de datos, esto no se visualiza */}
          <div className='dataSend'>
                <form onSubmit={sendData}>
                <input type="hidden" value={latitud} onChange={(event)=>{setLatitud(event.target.value)}}/>
                <input type="hidden" value={longitud} onChange={(event)=>{setLongitud(event.target.value)}}/>
                <input type="hidden" value={tagOne} onChange={(event)=>{setTagOne(event.target.value)}}/>
                <input type="hidden" value={confOne} onChange={(event)=>{setConfOne(event.target.value)}}/>
                <input type="hidden" value={tagTwo} onChange={(event)=>{setTagTwo(event.target.value)}}/>
                <input type="hidden" value={confTwo} onChange={(event)=>{setConfTwo(event.target.value)}}/>
                <input type="submit" value="Enviar datos" ref={submitRef}/>{/* Se reemplaza funcionalidad de este submit */}
                </form>
            </div>

            {/* Logitud */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div
                        style={{ color: "#930ee4" }}
                        className="text-xs font-weight-bold  text-uppercase mb-1"
                      >
                        Respuesta Pendiente
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        Latitud {latitud}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-question fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              {/* Longitud */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div
                        style={{ color: "#930ee4" }}
                        className="text-xs font-weight-bold  text-uppercase mb-1"
                      >
                        Respuesta Pendiente
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        Longitud {longitud}
                      </div>
                    </div>
                    <div className="col-auto">
                      {longitud !== null &&<i class="fas fa-question fa-2x text-gray-300"></i>}
                    </div> 
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-xl-3 col-md-6 mb-4">

             {/* Boton de mapa */}
            <Button type="button" class="btn btn-success main-button buttom-proyecto d-flex align-items-center" onClick={handleShow}>
              <i style={{marginRight:"0.5rem"}} class="fas fa-location-dot fa-1x text-gray-300"></i>Ver Mapa
            </Button>
            
            {/* Modal del mapa */}
            <Modal size="lg" show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                  
                  </Modal.Header>
                     <Modal.Body> <Mapa/> </Modal.Body>
              
            </Modal>

            </div>
        

           {btnDisplay && <button className="btn btn-warning" onClick={handleStart}>Empezar clasificacion</button>}
          </div>
          {/* Columna Izquierda */}
          
          {start &&<div className="row">
            <div class="col-xl-8 col-lg-7">
              <div class="card card-glass shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 style={{ color: "#930ee4" }} class="m-0 font-weight-bold">
                    Capturar o Subir imagen
                  </h6>
                  <div class="dropdown no-arrow"></div>
                </div>

                <div className="card-body">
                  <div className="chart-area">
                  <div  className="row justify-content-center d-flex align-items-center ">
                          <div class="col-5 col-md-3">
                            {/* Upload Image */}
                          <input type="file" name="imgFile" capture="camera" onChange={uploadImage}/><i style={{marginTop:"3rem"}} className="fas fa-cloud-arrow-up fa-5x text-gray-300"></i>
                      </div>
                           {/* Show Image */}
                      {imageURL && <div className='imageHolder'>
                        <img src={imageURL} alt="uploadPreview" crossOrigin='anonymous' ref={imageRef} />

                        <button onClick={handleIndentify}>Clasificar</button>
                        
                      </div>}

                          <div className="col-5 col-md-3">
                            
                          <a><i style={{marginTop:"3rem"}} className="fas  fa-camera fa-5x text-gray-300 "></i></a>
                          
                          </div>
                        </div>

                  </div>
                </div>
              </div>
            </div>
              
            {/* Columna Derecha */}
            {tagOne !== null &&<div class="col-xl-4 col-lg-5">
              <div class="card card-glass shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6
                    style={{ color: "#930ee4" }}
                    class="m-0 font-weight-bold "
                  >
                    Clasificacion
                  </h6>
                  <div class="dropdown no-arrow"></div>
                </div>

                <div className="card-body">
                  <div className="mt-4 text-center small">
                    {/* los gráficos van acá */}
                    {/* Graficos de progreso circulares */}
                    <div className="circular-bar">
                      <h6>{tagOne}</h6>
                     <CircularProgressbar value={confOne.toFixed(2)} text={`${confOne.toFixed(2)}%`} /> 
                    </div><br /><br /><br/><br />
                    <div className="circular-bar">
                      <h6>{tagTwo}</h6>
                     <CircularProgressbar value={confTwo.toFixed(2)} text={`${confTwo.toFixed(2)}%`} /> 
                    </div>
                    
                  </div>
                </div>
                
              </div>
              
            </div>}
           
          </div>}
          {/* Boton para guardar los datos en la DB */}
         {tagOne !== null &&<button className="btn btn-success" onClick={triggerSave}>Guardar Datos</button>}
        </div>
           
      </div>

      
    </>
  );
}

export default Proyecto;
