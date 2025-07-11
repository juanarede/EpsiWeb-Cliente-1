import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from "axios";

import "./Datos.css";
import Sidebar from "../Sidebar/Sidebar";


function Datos() {

  const [registros, setRegistros] = useState([]);

  const handleData= async ()=>{
     const response = await axios.get(`https://msthompson-server.vercel.app/api/informes`);

     setRegistros(response.data);
     console.log(registros);
     
  }
 
  //Transformamos el ARRAY de objetos a CSV
  const arrayObjToCsv=(ar)=> {
    //comprobamos compatibilidad
    if(window.Blob && (window.URL || window.webkitURL)){
      var contenido = "",
        d = new Date(),
        blob,
        reader,
        save,
        clicEvent;
      //creamos contenido del archivo
      for (var i = 0; i < ar.length; i++) {
        //construimos cabecera del csv
        if (i == 0)
          contenido += Object.keys(ar[i]).join(";") + "\n";
        //resto del contenido
        contenido += Object.keys(ar[i]).map(function(key){
                return ar[i][key];
              }).join(";") + "\n";
      }
      //creamos el blob
      blob =  new Blob(["\ufeff", contenido], {type: 'text/csv'});
      //creamos el reader
      var reader = new FileReader();
      reader.onload = function (event) {
        //escuchamos su evento load y creamos un enlace en dom
        save = document.createElement('a');
        save.href = event.target.result;
        save.target = '_blank';
        //aquí le damos nombre al archivo
        save.download = "log_"+ d.getDate() + "_" + (d.getMonth()+1) + "_" + d.getFullYear() +".csv";
        try {
          //creamos un evento click
          clicEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
          });
        } catch (e) {
          //si llega aquí es que probablemente implemente la forma antigua de crear un enlace
          clicEvent = document.createEvent("MouseEvent");
          clicEvent.initEvent('click', true, true);
        }
        //disparamos el evento
        save.dispatchEvent(clicEvent);
        //liberamos el objeto window.URL
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
      }
      //leemos como url
      reader.readAsDataURL(blob);
    }else {
      //el navegador no admite esta opción
      alert("Su navegador no permite esta acción");
    }
  };   
 
  //Ejecutamos la descarga y le pasamos el ARRAY
  const handleDownload = ()=>{
    arrayObjToCsv(registros);
  }

  useEffect(()=>{
    handleData();
  },[]);
    
    return(
    <>  
    <Sidebar/>
    <div className="container">
   
     
     <Table striped bordered hover variant="dark" responsive="sm">
      <thead>
        <tr>
          <th className="sm">#</th>
          <th className="sm">Latitud</th>
          <th className="sm">Longitud</th>
          <th className="sm">Resolución</th>
          <th className="sm">Fecha</th>
        </tr>
      </thead>
      <tbody>
        {registros.map((record, index)=>{
          return(<tr>
          <td className="sm">{index}</td>
          <td className="sm">{record.latitud}</td>
          <td className="sm">{record.longitud}</td>
          <td className="sm">{record.label_1} | {record.conf_1.substr(0,5)}%</td>
          <td className="sm">{record.created_at.substr(0,10)}</td>
        </tr>)
        })}
      </tbody>
    </Table>
    <div className="d-grid gap-2">
        <Button variant="dark" size="lg" onClick={handleDownload}>
           Descargar datos
        </Button>
    </div> 

    </div>
    </>
    )
}
export default Datos;

