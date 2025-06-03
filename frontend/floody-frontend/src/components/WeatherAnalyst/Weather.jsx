import React from "react";
import MainCard from "./MainCard";
import TopBar from "../Dashboard/TopBar";
import Cards from "./infoCards"

export default function Weather(){
    return(
        <div className="bg-white rounded-lg pb-4 shadow h-[220vh] w-full">
            <TopBar />
            <MainCard />
            <div className="justify-between m-6 border px-4 grid gap-3 grid-cols-12">
                <Cards />
                
            </div>
        </div>
    )
}