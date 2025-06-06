import React from "react";
import { FiCloudRain, FiCloud, FiCloudDrizzle } from "react-icons/fi";

export default function PreciptationCard() {
    return (
        <div className="border rounded m-2 p-4 col-span-4 max-w-full">
            <h3 className="text-stone-500 mb-2 text-lg font-semibold">Precipitation total</h3>
            <div className="flex flex-col space-y-4">
                <div className="block items-center">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Last 24 hours</span>
                        <p className="text-3xl font-semibold">3 mm</p>
                    </div>
                    <div className="flex items-center">
                        <FiCloudRain className="text-pluvia-purple mr-2" />
                        <span className="font-semibold">Rain</span>
                    </div>
                    <div className="h-0.5 bg-gray-300 w-full my-2" />
                </div>
                <div className="block items-center">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Next 24 hours</span>
                        <p className="text-3xl font-semibold">0 mm</p>
                    </div>
                    <div className="flex items-center">
                        <FiCloud className="text-pluvia-purple mr-2" />
                        <span className="font-semibold">Precipitation</span>
                    </div>
                    <div className="h-0.5 bg-gray-300 w-full my-2" />
                </div>
                <div className="block items-center">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Next week</span>
                        <p className="text-3xl font-semibold">1 mm</p>
                    </div>
                    <div className="flex items-center">
                        <FiCloudDrizzle className="text-pluvia-purple mr-2" />
                        <span className="font-semibold">Drizzle</span>
                    </div>
                    <div className="h-0.5 bg-gray-300 w-full my-2" />
                </div>
            </div>
        </div>
    );
}