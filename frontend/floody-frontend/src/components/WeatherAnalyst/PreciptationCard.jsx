import React from "react";
import { FiCloudRain, FiCloud, FiCloudDrizzle } from "react-icons/fi";

export default function PreciptationCard(){
 
    
    return(
        <div className="border rounded m-8 col-span-4 max-w-[36vh]">

             <Card 
                
            />
        </div>

           
    )
}

const Card= () => {
    return(
        <div className="p-4 rounded">
            <h3 className="text-stone-500 mb-2 text-lg font-semibold">Precipitation total</h3>
            <div className="flex flex-col space-y-4">
                <div className="block items-center">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Last 24 hours</span>
                        <p className="text-3xl font-semibold">3 mm</p>
                    </div>
                    <div className="flex items-center">
                        <FiCloudRain className="text-blue-500 mr-2" />
                        <span className="font-semibold">Rain</span>
                    </div>
                    <div className="border border-gray-300 w-full my-2" /> 
                </div>
                <div className="block items-center">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Next 24 hours</span>
                        <p className="text-3xl font-semibold">0 mm</p>
                    </div>
                    <div className="flex items-center">
                        <FiCloud className="text-blue-500 mr-2" />
                        <span className="font-semibold">Precipitation</span>
                    </div>
                    <div className="border border-gray-300 w-full my-2" /> 
                </div>
                <div className="block items-center">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Next week</span>
                        <p className="text-3xl font-semibold">1 mm</p>
                    </div>
                    <div className="flex items-center">
                        <FiCloudDrizzle className="text-blue-500 mr-2" />
                        <span className="font-semibold">Drizzle</span>
                    </div>
                    
                </div>
            </div>
        </div>


    )
}