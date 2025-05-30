import React from "react";
import MainCard from "./MainCard";
import TopBar from "../Dashboard/TopBar";

export default function Weather(){
    return(
        <div className="bg-white rounded-lg pb-4 shadow h-[220vh] min-w-[145vh]">
            <TopBar />

            <MainCard />
        </div>
    )
}