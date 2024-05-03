
import { Route, Routes } from "react-router-dom";
import Datos from "../components/Datos/Datos";
import Inicio from '../components/Inicio/Inicio'
import Muestras from "../components/Muestras/Muestras";
import Clasificador from '../components/Proyecto/Clasificador'


function myRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/clasificador" element={<Clasificador />} />
        <Route path="/muestras" element={<Muestras />} />
        <Route path="/datos" element={<Datos />} />   
    </Routes>
  )
}

export default myRoutes