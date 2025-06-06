import React, { useState } from "react"
import TopBar from "./TopBar"
import Grid from "./Grid"
import Map from "../Map/Map"

export default function Dashboard (){
    const [activeSensors, setActiveSensors] = useState(0);
    const [sensorData, setSensorData] = useState([]);
   
    return(
        <div className="bg-white rounded-lg pb-4 shadow h-[100vh] min-w-[145vh]">
            <TopBar />
            <Map 
                onSensorsUpdate={setActiveSensors} 
                onSensorDataUpdate={setSensorData}
            />
            <Grid 
                activeSensors={activeSensors} 
                sensorData={sensorData}
            />
        </div>   
    )
}