import React from "react";
import WeatherTopBar from "./WeatherTopBar";
import WeatherForecast from "./WeatherForecast";
import WeatherGrid from "./WeatherGrid";

export default function MainCard(){
    return (
        <div className="m-4 p-6 min-h-[50vh] rounded border border-stone-300 shadow ">
            <WeatherTopBar />
            <WeatherForecast />
            <WeatherGrid/>
        </div>
    )
    
}