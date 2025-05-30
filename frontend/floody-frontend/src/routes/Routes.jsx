import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    },
    
]);

export default router;