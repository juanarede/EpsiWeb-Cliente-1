import React,{useState, useEffect} from "react";
import Classify from "../components/Classify/Classify";

const locateContext = React.createContext();

const LocateProvider = ()=>{
  const [latitud, setLatitud] = useState(null);
  const [longitud, setLongitud] = useState(null);

  const [location, setLocation] = useState([]); 

  const locate = ()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {         
          setLatitud(pos.coords.latitude);
          console.log(latitud);
          setLongitud(pos.coords.longitude);
          console.log(longitud);
          
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.log("El usuario denegó la solicitud");
              break;
            case error.POSITION_UNAVAILABLE:
              console.log("Localización no disponible");
              break;
            case error.TIMEOUT:
              console.log("Se agotó el tiempo de espera para la localizacion");
              break;
          }
        }
      );
    } else {
      console.log("Tu navegador no soporta geolocalizacion");
    }
  }
  

  useEffect(()=>{
    setLocation([latitud, longitud,...location]);
    locate();
  },[latitud, longitud]);

  return(
    <locateContext.Provider value={location}>
        <App/>
    </locateContext.Provider>

  );
}

export {LocateProvider, locateContext};
