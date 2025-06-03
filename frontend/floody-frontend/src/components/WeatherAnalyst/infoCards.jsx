import React from "react";
import { FiSun, FiCloudRain, FiCloud, FiSunset } from "react-icons/fi";

export default function Cards() {
    const forecastData = [
        { day: "Tomorrow", temperature: "9° / 5°", icon: <FiSun /> },
        { day: "We", temperature: "17° / 11°", icon: <FiCloudRain /> },
        { day: "Th", temperature: "15° / 9°", icon: <FiCloud /> },
        { day: "Fr", temperature: "22° / 10°", icon: <FiSunset /> },
        { day: "Sa", temperature: "17° / 13°", icon: <FiCloudRain /> },
    ];

    return (
        <div className="space-y-1">
            {forecastData.map((data, index) => (
                <Card 
                    key={index}
                    icon={data.icon}
                    day={data.day}
                    temperature={data.temperature}
                />
            ))}
        </div>
    );
}

const Card = ({ day, temperature, icon }) => {
    return (
        <div className="flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] bg-transparent text-stone-500 shadow-none hover:bg-stone-200">
            {icon}
            <div className="flex flex-col">
                <h3 className="text-stone-500 mb-1 text-sm">
                    {day}
                </h3>
                <p className="text-3xl font-semibold">
                    {temperature}
                </p>
            </div>
        </div>
    );
}