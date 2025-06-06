import React from "react"; 
import { FiCloud, FiMap, FiStopCircle } from "react-icons/fi"; 
import { Link, useLocation } from "react-router-dom";

export default function RouteSelect() {
    const location = useLocation();

    return (
        <div className="space-y-1">
            
            <Route 
                to="/dashboard"
                Icon={FiStopCircle} 
                selected={location.pathname === "/"} 
                title="Dashboard"  
            />
            
            <Route 
                to="/dashboard"
                Icon={FiMap} 
                selected={location.pathname === "/dashboard"} 
                title="MapView"  
            />
            
            <Route 
                to="/weather"
                Icon={FiCloud} 
                selected={location.pathname === "/weather"} 
                title="Weather"  
            />
        </div>
    );
}

const Route = ({ Icon, selected, title, to }) => {
    return (
        
        <Link
            to={to}
            className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
                    selected
                        ? "bg-white text-stone-950 shadow"
                        : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
                }`}
            >
            
            {Icon && <Icon className={selected ? "text-violet-500" : "text-stone-400"} />}
            <span>{title}</span>
            
        </Link>

    );
};