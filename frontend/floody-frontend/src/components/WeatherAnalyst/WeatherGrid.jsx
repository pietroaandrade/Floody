import React from "react";
import TempCards from "./TempCards";

export default function WeatherGrid(){
    return(
        <div className="mt-8 grid grid-cols-12 gap-6">
            <TempCards />
        </div>
    )
}

