import React from "react";
import MainCard from "./MainCard";
import TopBar from "../Dashboard/TopBar";
import PreciptationCard from "./PreciptationCard"
import PreciptationGraph from "./PreciptationGraph";
import Cards from "./infoCards";

export default function Weather(){
    return(
        <div className="bg-white rounded-lg pb-4 shadow min-h-[100vh] w-full">
        <TopBar />
        <MainCard />
        <div className="grid grid-cols-12 gap-4 px-4">
            <div className="m-2 p-3 border rounded col-span-4">
                
                <Cards/>
            </div>
            <div className="m-2 col-span-4">
                <PreciptationCard />
            </div>
            <div className="m-2 col-span-4">
                <PreciptationGraph />
            </div>
        </div>
    </div>
    )
}