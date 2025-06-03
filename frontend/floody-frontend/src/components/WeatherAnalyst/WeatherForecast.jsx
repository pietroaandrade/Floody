import React from "react";


export default function WeatherForecast({  }) {
    

    return (
        <div className="flex mt-8 justify-between items-center">
            <div>
                <p className="text-stone-500 mb-1 text-sm">WeatherForecast</p>
                <div className="flex flex-col">
                    <h1 className="text-5xl font-semibold">Storm</h1>
                    <h1 className="text-5xl font-semibold">with Heavy Rain</h1>
                </div>
            </div>
            <div className="flex">
                <h1 className="text-8xl font-semibold">17</h1>
                <h1 className="mt-3 text-5xl font-semibold">°C</h1>
            </div>
        </div>
    );
}