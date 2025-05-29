import React from "react"
import TopBar from "./TopBar"
import Grid from "./Grid"
import Map from "../Map/Map"

export default function Dashboard (){
   
    return(
        <div className="bg-white rounded-lg pb-4 shadow h-[220vh] min-w-[145vh]">
            <TopBar />
            <Map />
            <Grid />
        </div>   
    
)}