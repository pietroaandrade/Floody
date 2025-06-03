import React from "react";
import { FiSun } from "react-icons/fi";

export default function Cards(){
    
    
    return(
        <>
            <Card 
                icon={<FiSun />}
                day="hhhh"
                temperature="hhh"
  
            />
            
        </>
    )
}

const Card = ({day, temperature }) => {
    return(
        <div className="m-4 p-4 col-span-4 rounded border max-h-[18vh]">
            Forecast
            <div>
                <h3 className="text-stone-500 mb-2 text-sm">
                    {day}
                </h3>
                <p className="text-3xl font-semibold">
                    {temperature}
                </p>
            </div>
        </div>
    )
}