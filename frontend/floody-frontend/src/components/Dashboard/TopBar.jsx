import React from "react";

export default function TopBar(){
    const date = new Date();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekday = weekdays[date.getDay()];
    let day = date.getDate();
    let year = date.getFullYear();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[date.getMonth()];

    return(
        <div className="border-b px-4 mb-4 mt-2 pb-4
        border-stone-200">
            <div className="flex items-center justify-between p-0.5">
                <div >
                    <span className=" text-sm font-bold block">Welcome, Pietro</span>
                    <span className="text-xs block text-stone-500">{weekday}, {month} {day}, {year} </span>
                </div>
            </div>
            
            
        </div>
    )
}