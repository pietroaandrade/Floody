import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import {FiChevronDown} from "react-icons/fi"

export default function WeatherTopBar(){
    return(
        <div className="flex justify-between items-center">
            <div>
                <p className="text-stone-500 mb-1 text-sm">Current Time</p>
                <h3 className="text-3xl font-semibold">11:30 PM</h3>
            </div>
            <div className="bg-stone-100 rounded">
                <button className="flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color hover:bg-stone-200 bg-transparent text-stone-500 ">
                    <IoLocationOutline />
                    <span className="pl-2"  >São Paulo, Brazil</span>
                    <FiChevronDown />

                </button>
            </div>
        </div>
    )
}