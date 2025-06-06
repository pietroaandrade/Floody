import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

export default function PreciptationGraph() {
    const data = [
        { time: "00:00", Precipitation: 2 },
        { time: "06:00", Precipitation: 1 },
        { time: "12:00", Precipitation: 3 },
        { time: "18:00", Precipitation: 0 },
        { time: "24:00", Precipitation: 0 },
    ];

    return (
        <div className="border rounded m-2 p-4 col-span-4 max-w-full">
            <h3 className="text-stone-500 mb-2 text-lg font-semibold">Precipitation today</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="Precipitation"
                        stroke="#8e51ff"
                        activeDot={{ r: 10 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}