import React from "react";

export default function TempCards(){
    return(
        <>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </>
    )
}

const Card = () => {
    return(
        <div className="m-4 p-4 col-span-2 rounded border">
            <div className="flex mb-8 items-start justify-between">
                <div>
                    <h3 className="text-stone-500 mb-2 text-sm">
                        hello
                    </h3>
                    <p className="text-3xl font-semibold">
                        hi
                    </p>
                </div>
            </div>
        </div>
    )
}