import React from "react";

export default function Cards({ activeSensors = 0 }){
    
    return(
        <>
            <Card 
                title="Total Active Sensors"
                info={`${activeSensors} Sensors`}
            />
            <Card
                title="High Risk Zones"
                info="10 Risk Zones"
            />
            <Card 
                title="Last Alert"
                info="New High Risk Zone"
            />
        </>
    )
}

const Card = ({title, info}) => {
    return(
        <div className="m-4 p-4 col-span-4 rounded border border-stone-300">
            <div className="flex mb-8 items-start justify-between">
                <div>
                    <h3 className="text-stone-500 mb-2 text-sm">
                        {title}
                    </h3>
                    <p className="text-3xl font-semibold">
                        {info}
                    </p>
                </div>
            </div>
        </div>
    )
}