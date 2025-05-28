import React, { useState } from "react"; 
import { FiCloud, FiMap, FiStopCircle } from "react-icons/fi"; 

export default function RouteSelect() {
    const [selectedRoute, setSelectedRoute] = useState("Dashboard"); 

    const handleRouteChange = (route) => {
        setSelectedRoute(route); 
    };

    return (
        <div className="space-y-1">
            <Route 
                Icon={FiStopCircle} 
                selected={selectedRoute === "Dashboard"} 
                title="Dashboard"  
                onClick={() => handleRouteChange("Dashboard")} 
            />
            <Route 
                Icon={FiMap} 
                selected={selectedRoute === "MapView"} 
                title="MapView"  
                onClick={() => handleRouteChange("MapView")} 
            />
            <Route 
                Icon={FiCloud} 
                selected={selectedRoute === "Weather"} 
                title="Weather"  
                onClick={() => handleRouteChange("Weather")} 
            />
        </div>
    );
}

const Route = ({ Icon, selected, title, onClick }) => {
    return (
        <button 
            onClick={onClick} 
            className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
                selected
                    ? "bg-white text-stone-950 shadow"
                    : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
            }`}
        >
            <Icon className={selected ? "text-violet-500" : ""} />
            <span>{title}</span>
        </button>
    );
};