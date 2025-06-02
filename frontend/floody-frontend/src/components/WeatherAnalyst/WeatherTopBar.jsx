import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";

const CITIES = [
    { name: "São Paulo", country: "Brazil", lat: -23.5505, lon: -46.6333 },
    { name: "Rio de Janeiro", country: "Brazil", lat: -22.9068, lon: -43.1729 },
    { name: "New York", country: "USA", lat: 40.7128, lon: -74.0060 },
    { name: "London", country: "UK", lat: 51.5074, lon: -0.1278 },
    { name: "Tokyo", country: "Japan", lat: 35.6762, lon: 139.6503 },
];

export default function WeatherTopBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState({ name: "São Paulo", country: "Brazil" });

    const handleLocationSelect = (city) => {
        setSelectedLocation(city);
        setIsDropdownOpen(false);
    };

    return (
        <div className="flex justify-between items-center">
            <div>
                <p className="text-stone-500 mb-1 text-sm">Current Time</p>
                <h3 className="text-3xl font-semibold">11:30 PM</h3>
            </div>
            <div className="bg-stone-100 rounded relative">
                <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] hover:bg-stone-200 bg-transparent text-stone-500"
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
    );
}