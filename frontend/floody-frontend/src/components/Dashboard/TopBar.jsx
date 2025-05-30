import React from "react";
import {FiCalendar} from "react-icons/fi"

export default function TopBar(){
    function getSeason() {
      if (month >= 2 && month <= 4) { 
        return "Spring";
      } else if (month >= 5 && month <= 7) { 
        return "Summer";
      } else if (month >= 8 && month <= 10) { 
        return "Autumn";
      } else { 
        return "Winter";
      }
    }
    const date = new Date();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekday = weekdays[date.getDay()];
    let day = date.getDate();
    let year = date.getFullYear();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[date.getMonth()];

    const brazilSeason = getSeason(date);
      

    return(
        <div className="border-b px-4 mb-4 mt-2 pb-4
        border-stone-200">
            <div className="flex items-center justify-between p-0.5">
                <div >
                    <span className=" text-sm font-bold block">Welcome, Pietro</span>
                    <span className="text-xs block text-stone-500">{weekday}, {month} {day}, {year} </span>
                </div>
                <button className=" flex text-sm items-center gap-2 bg-stone-100 transition-colors
                hover:text-violet-700 px-3 py-1.5 rounded">
                    <FiCalendar />
                    <span>{brazilSeason}</span>

                </button>
            </div>
            
            
        </div>
    )
}