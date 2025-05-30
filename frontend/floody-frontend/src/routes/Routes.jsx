import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/Map-View",
        element: <div>Map View</div>
    },
    {
        path: "/Weather-Analyst",
        element: <div>Weather Page</div> 
    }
]);

export default router;