import React from "react";
import {MapContainer,TileLayer,Marker,Popup,useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./mapa.css";
//import L from "leaflet";
import icon from "./constants";
import { useState, useEffect } from "react";

//Iconos Mapa
import Limpia from "./icono-limpia";
import Contaminada from "./icono-contaminada";
import Bacterias from "./icono-bacterias";

//ProgressBar
import  ProgressBar  from "react-bootstrap/ProgressBar";

//Para traer los datos
import axios from "axios";



function Mapa(){

    const [registros, setRegistros] = useState([]);

     //Traemos los registros de la Base de datos
     const handleData= async ()=>{
 

        const response = await axios.get(`http://127.0.0.1:8000/api/informes`);
        
        setRegistros(response.data);
        
        console.log(response.data[1]['longitud']);
     

     }

     //Cambio de Icono
     const handleIcon =(resolucion)=>{

        switch(resolucion){
            case 'contaminacion':
                return Contaminada;
                break;
            case 'bacteria':
                return Bacterias;
                break;
            default:
                return Limpia;        
        }

     }
     
 useEffect(() =>{     
        handleData();
      },[]);

 
      
    return (
        <MapContainer
             center={[-34.60810, -58.37387]}
             zoom={10}
             scrollWheelZoom={true}
             className="mapa"
             >
           <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           />

           {/* Recorremos los marcadores */}
           {registros.map((record,index)=>{
                    return(
                        <Marker position={[record.latitud,record.longitud]} icon={handleIcon(record.label_1)}>
                             <Popup>
                                {record.label_1.toUpperCase()}  <ProgressBar now={parseFloat(record.conf_1)} label={`${parseFloat(record.conf_1).toFixed(2)}%`} />
                             </Popup>
                        </Marker>
                    )
                })}
            
        </MapContainer>
    );



}

export default Mapa