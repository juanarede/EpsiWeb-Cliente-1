import L from "leaflet";
import Contaminada from '../assets/img/contaminacion.png';

export default L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: Contaminada,
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});