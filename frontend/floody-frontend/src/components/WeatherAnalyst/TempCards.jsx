import React from "react";
import { FiCloudRain, FiCloudLightning, FiSun  } from "react-icons/fi";
import { TiWeatherPartlySunny, TiWeatherSnow, TiWeatherCloudy } from "react-icons/ti";

export default function TempCards(){
    return(
        <>
            <Card 
                icon={<FiCloudRain />}
                temperature="18"
                hour="18 PM"

            />
            <Card 
                icon={<FiCloudLightning />}
                temperature="18"
                hour="19 PM"

            />
            <Card 
                icon={<FiSun />}
                temperature="20"
                hour="20 PM"

            />
            <Card 
                icon={<TiWeatherPartlySunny />}
                temperature="20"
                hour="21 PM"

            />
            <Card 
                icon={<TiWeatherSnow />}
                temperature="21"
                hour="22 PM"

            />
            <Card 
                icon={<TiWeatherCloudy />}
                temperature="20"
                hour="23 PM"

            />
        </>
    )
}

const Card = ({icon, temperature, hour}) => {
    return(
        <div className="m-4 p-4 col-span-2 rounded border">
            {icon}
            <div className=" mb-8 items-start justify-between">
                <div>
                    <h3 className="text-stone-700 mb-2 text-m">
                        {hour}
                    </h3>
                    <p className="text-4xl font-semibold">
                        {temperature}°C
                    </p>
                </div>
            </div>
        </div>
    )
}