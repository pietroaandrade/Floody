import React from "react";
import { getHighRiskZones, getLatestAlert } from "../Map/RiskFunctions";

export default function Cards({ activeSensors = 0, sensorData = [] }){
    const highRiskZones = getHighRiskZones(sensorData);
    const latestAlert = getLatestAlert(sensorData);
    
    return(
        <>
            <Card 
                title="Total Active Sensors"
                info={`${activeSensors} Sensors`}
            />
            <Card
                title="High Risk Zones"
                info={`${highRiskZones} Risk Zones`}
                className={highRiskZones}
            />
            <Card 
                title="Last Alert"
                info={latestAlert.message}
                subInfo={latestAlert.timestamp} 
                className={latestAlert.message !== "No current alerts"}
            />
        </>
    )
}

const Card = ({title, info, subInfo, }) => {
    return(
        <div className="m-4 p-4 col-span-4 rounded border max-h-[18vh]">
            <div className="flex mb-8 items-start justify-between">
                <div>
                    <h3 className="text-stone-500 mb-2 text-sm">
                        {title}
                    </h3>
                    <p className="text-3xl font-semibold">
                        {info}
                    </p>
                    {subInfo && (
                        <p className="text-xs text-stone-400 mt-1">
                            {subInfo}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}