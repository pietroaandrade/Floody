import React from "react";
import Cards from "./Cards";

export default function Grid({ activeSensors, sensorData }){
    return(
        <div className="px-4 grid gap-3 grid-cols-12">
            <Cards 
                activeSensors={activeSensors} 
                sensorData={sensorData}
            />
        </div>
    )
}