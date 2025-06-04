import React, { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import WeatherForecast from "./WeatherForecast"; 
import TempCards from "./TempCards";

export const CITIES = [
    { name: "São Paulo", country: "Brazil", lat: -23.5505, lon: -46.6333, timezone: "America/Sao_Paulo" },
    { name: "Rio de Janeiro", country: "Brazil", lat: -22.9068, lon: -43.1729, timezone: "America/Sao_Paulo" },
    { name: "New York", country: "USA", lat: 40.7128, lon: -74.0060, timezone: "America/New_York" },
    { name: "London", country: "UK", lat: 51.5074, lon: -0.1278, timezone: "Europe/London" },
    { name: "Tokyo", country: "Japan", lat: 35.6762, lon: 139.6503, timezone: "Asia/Tokyo" },
];

export default function WeatherTopBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(CITIES[0]);
    const [currentTime, setCurrentTime] = useState(""); 

    useEffect(() => {
        function updateTime() {
            const time = new Date().toLocaleTimeString('en-US', {
                timeZone: selectedLocation.timezone,
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
            setCurrentTime(time);
        }

        updateTime();

        const now = new Date();
        const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

        const timeout = setTimeout(() => {
            updateTime();
            const interval = setInterval(updateTime, 60000);
            return () => clearInterval(interval);
        }, msToNextMinute);

        return () => clearTimeout(timeout);
    }, [selectedLocation]);

    const handleLocationSelect = (city) => {
        setSelectedLocation(city);
        setIsDropdownOpen(false);
        return (city)
    };

    return (
        <div className="flex flex-col"> 
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-stone-500 mb-1 text-sm">Current Time</p>
                    <h3 className="text-3xl font-semibold">{currentTime}</h3>
                </div>
                <div className="bg-stone-100 rounded relative">
                    <button 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] hover:bg-stone-200 bg-transparent text-stone-500 hover:text-pluvia-purple"
                    >
                        <IoLocationOutline />
                        <span className="pl-2">{selectedLocation.name}, {selectedLocation.country}</span>
                        <FiChevronDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-full bg-white rounded shadow-lg z-10">
                            {CITIES.map((city) => (
                                <button
                                    key={`${city.name}-${city.country}`}
                                    onClick={() => handleLocationSelect(city)}
                                    className="w-full text-left px-4 py-2 hover:bg-stone-100 text-sm"
                                >
                                    {city.name}, {city.country}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <WeatherForecast />
            <div className="mt-8 grid grid-cols-12 gap-6">
                <TempCards />
            </div>
        </div>
    );
}