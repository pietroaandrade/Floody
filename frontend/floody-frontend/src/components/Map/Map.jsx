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
    
  },
  {
    geocode:[-23.5400, -46.5700 ],
    
  },
  {
    geocode:[-23.516944, -46.660278],
    
  },
  {
    geocode:[-23.5280, -46.3420],
    
  },
  {
    geocode:[-23.6700, -46.5869],
    
  },
  {
    geocode:[-23.6570, -46.5850],
    
  },
  {
    geocode:[-23.5530, -46.5650],
    
  },
  {
    geocode:[-23.5330, -46.6320],
    
  },
  {
    geocode:[-23.5050, -46.6050],
    
  },
  {
    geocode:[-23.5323, -46.6379],
    
  },
  
  
  
];

export default function Map({ onSensorsUpdate }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [sensorData, setSensorData] = useState([]);
  const mapRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    
    const updateSensorData = () => {
      setSensorData(getSensorData());
    };
    
    updateSensorData(); // Initial update
    const interval = setInterval(updateSensorData, 60000);
    
    return () => clearInterval(interval);
  }, []);

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
  }, [isExpanded]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isExpanded && containerRef.current && !containerRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <div className="p-8 relative">
      <div 
        ref={containerRef}
        style={{ height: isExpanded ? '80vh' : '50vh', transition: 'height 0.3s ease' }}
      >
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
          {sensorData.map((sensor, index) => (
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
                  
                </div>
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
