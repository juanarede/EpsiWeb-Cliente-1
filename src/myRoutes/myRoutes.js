
import { Route, Routes } from "react-router-dom";
import Inicio from '../components/Inicio/Inicio'
import Proyecto from '../components/Proyecto/Proyecto'

function myRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyecto" element={<Proyecto />} />

    </Routes>
  )
}

export default myRoutes