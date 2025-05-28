import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import markerIcon from "./assets/marker-icon.svg";
import "./Map.css"

export default function Map() {
  const markers = [
    {
      geocode:[-23.5644, -46.6499],
      popup: "Hello 1"
    },
    {
      geocode:[-23.5542, -46.6267],
      popup: "Hello 2"
    },
    {
      geocode:[-23.5711, -46.6622],
      popup: "Hello 3"
    },
  ]
  const customIcon = new Icon(
    {
      iconUrl: markerIcon,
      iconSize: [60,60]
    }
)

  return (
    <>
      
      <MapContainer center = {[-23.559831106, -46.655830718]} zoom = {18}>
        <TileLayer 

          attribution ='&copy; <a href="https://www.openstreetmap.org/#map=2/-37.2/129.6">Open Street Map</a> contributors'
          url = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        
        />
        {markers.map(marker => (
          <Marker position={marker.geocode} icon={customIcon} >
            <Popup>
              {marker.popup}
            </Popup>
          </Marker>
        ))}


      </MapContainer>
    </>
  )
}
