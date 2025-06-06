import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import greenSensor from "./assets/green-sensor.svg";
import yellowSensor from "./assets/yellow-sensor.svg";
import redSensor from "./assets/red-sensor.svg";
import { SlFrame } from "react-icons/sl";
import "./Map.css"
import { useState, useEffect, useRef } from "react";
import { getSensorData } from "./RiskFunctions";

export const sensors = [
  {
    geocode:[-23.5163, -46.6235],
    address: "Rodoviária Tietê"
    
  },
  {
    geocode:[-23.5400, -46.5700 ],
    address: "UBS Cidade Líder"
  },
  {
    geocode:[-23.516944, -46.660278],
    address: "Ponte Casa Verde"
  },
  {
    geocode:[-23.5280, -46.3420],
    address: "Jardim Pantanal"
  },
  {
    geocode:[-23.6700, -46.5869],
    address: "Vale Anhangabaú "
  },
  {
    geocode:[-23.6570, -46.5850],
    address: "Heliópolis"
  },
  {
    geocode:[-23.5530, -46.5650],
    address: "Av. Aricanduva"
  },
  {
    geocode:[-23.5330, -46.6320],
    address: "Av. 25 de Março"
  },
  {
    geocode:[-23.5050, -46.6050],
    address: "Rua da Cantareira "
  },
  {
    geocode:[-23.5323, -46.6379],
    address: "Terminal Bandeiras"
  },


  
  
  
];

export default function Map({ onSensorsUpdate, onSensorDataUpdate, isBackground }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [sensorData, setSensorData] = useState([]);
  const mapRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateSensorData = () => {
      const newData = getSensorData();
      setSensorData(newData);
      if (onSensorDataUpdate) {
        onSensorDataUpdate(newData);
      } else {
        
        getSensorData();
      }
    };
    
    
    if (!isBackground) {
      updateSensorData();
      const interval = setInterval(updateSensorData, 60000);
      return () => clearInterval(interval);
    }
  }, [onSensorDataUpdate, isBackground]);

  useEffect(() => {
    if (onSensorsUpdate) {
      onSensorsUpdate(sensors.length);
    }
  }, [sensors.length, onSensorsUpdate]);

  const getIcon = (riskColor) => {
    const iconUrl = riskColor === 'green' ? greenSensor : 
                   riskColor === 'yellow' ? yellowSensor : 
                   redSensor;
    
    return new Icon({
      iconUrl: iconUrl,
      iconSize: [60, 60]
    });
  };

  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() => {
        mapRef.current.invalidateSize();
      }, 300);
    }
  }, [isExpanded, isBackground]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isBackground && isExpanded && containerRef.current && !containerRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded, isBackground]);

  return (
    <div className={`relative ${isBackground ? 'w-screen h-screen' : 'p-8'}`} style={isBackground ? { height: '100vh' } : {}}>
      <div 
        ref={containerRef}
        style={!isBackground ? { height: isExpanded ? '80vh' : '50vh', transition: 'height 0.3s ease' } : {}}
        className={`${isBackground ? 'w-full h-full' : ''}`}
      >
        <MapContainer 
          center = {[-23.559831106, -46.655830718]} 
          zoom = {13} 
          className={`rounded shadow h-full ${isBackground ? 'w-full h-full' : ''}`}
          zoomControl={false}
          scrollWheelZoom={!isBackground}
          attributionControl={false}
          ref={mapRef}
          doubleClickZoom={!isBackground}
          dragging={!isBackground}
          touchZoom={!isBackground}
          boxZoom={!isBackground}
          keyboard={!isBackground}
          style={isBackground ? { height: '100%' } : {}}
        >
          <TileLayer 
            url = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          {!isBackground && sensorData.map((sensor, index) => (
            <Marker 
              key={index}
              position={sensor.location} 
              icon={getIcon(sensor.riskColor)}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="text-sm font-bold block">Sensor Information</h3>
                  <p className="text-xs block text-stone-500"> Water Level: {sensor.waterLevel} cm</p>
                  <p className="text-xs block text-stone-500">Risk Level: {sensor.riskLevel}</p>
                  <p className="text-xs block text-stone-500">Location: {sensor.address}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      {!isBackground && (
        <div 
          className="absolute bottom-10 right-10 p-2 cursor-pointer transition-transform duration-200 hover:scale-110 hover:rounded-full hover:shadow-lg" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <SlFrame className="w-6 h-6 text-stone-600" />
        </div>
      )}
    </div>
  )
}
