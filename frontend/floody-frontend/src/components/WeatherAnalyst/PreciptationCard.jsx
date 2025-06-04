import React from "react";


export default function PreciptationCard(){
 
    
    return(
            <Card 
                
            />
    )
}

const Card = () => {
    return(
        <div className="m-4 p-4 col-span-4 rounded border max-h-[18vh]">
            <div className="flex mb-8 items-start justify-between">
                <div>
                    <h3 className="text-stone-500 mb-2 text-sm">
                        {title}
                    </h3>
                    <p className="text-3xl font-semibold">
                        {info}
                    </p>
                    {subInfo && (
                        <p className="text-xs text-stone-400 mt-1">
                            {subInfo}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}