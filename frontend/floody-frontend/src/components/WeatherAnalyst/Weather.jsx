import React from "react";
import MainCard from "./MainCard";
import TopBar from "../Dashboard/TopBar";
import Grid from "./WeatherGrid";

export default function Weather(){
    return(
        <div className="bg-white rounded-lg pb-4 shadow h-[220vh] w-full">
            <TopBar />
            <MainCard />
            <div className="flex px-4 gap-3 grid grid-cols-12 items-center justify-center">
                <Grid />
            </div>
            
        </div>
    )
}