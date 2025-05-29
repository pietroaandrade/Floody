import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import markerIcon from "./assets/marker-icon.svg";
import { SlFrame } from "react-icons/sl";
import "./Map.css"
import { useState, useEffect, useRef } from "react";

export default function Map() {
  const [isExpanded, setIsExpanded] = useState(false);
  const mapRef = useRef(null);

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

  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() => {
        mapRef.current.invalidateSize();
      }, 300); // Wait for transition to complete
    }
  }, [isExpanded]);

  return (
    <div className="p-8 relative">
      <div style={{ height: isExpanded ? '80vh' : '50vh', transition: 'height 0.3s ease' }}>
        <MapContainer 
          center = {[-23.559831106, -46.655830718]} 
          zoom = {13} 
          className="rounded shadow h-full"
          zoomControl={false}
          scrollWheelZoom={true}
          attributionControl={false}
          ref={mapRef}
        >
          <TileLayer 
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
      </div>
      <div 
        className="absolute bottom-10 right-10 p-2 cursor-pointer transition-transform duration-200 hover:scale-110 hover:rounded-full hover:shadow-lg" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <SlFrame className="w-6 h-6 text-stone-600" />
      </div>
    </div>
  )
}
