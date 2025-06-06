// frontend/floody-frontend/src/routes/Routes.jsx
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar/Navbar"; 
import Weather from "../components/WeatherAnalyst/Weather"; 
import Dashboard from "../components/Dashboard/Dashboard"; 
import Login from "../components/login/signup/Login";
import Signup from "../components/login/signup/Signup"; 
import Support from "../components/Support/support"; 
import Error from "../components/login/signup/Error"; 

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/support",
        element: <Support />
    },
    {
        path: "/*",
        element: (
            <main className="grid grid-cols-2-[220px_1fr] gap-4 p-4">
                <Navbar />
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="weather" element={<Weather />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
        )
    }
]);

export default router;
