import React from "react";

export default function Cards(){
    
    return(
        <>
            <Card />
            <Card />
            <Card />
        </>
    )
}

const Card = ({ }) => {
    return(
        <div className="p-4 bg-black col-span-4"></div>
    )
}