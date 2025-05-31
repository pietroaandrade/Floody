//Components
import Navbar from "./components/Navbar/Navbar"
import Weather from "./components/WeatherAnalyst/Weather";
import Dashboard from "./components/Dashboard/Dashboard";
//Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <main className="grid grid-cols-2-[220px_1fr] gap-4 p-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/Weather" element={<Weather />}></Route>
        </Routes>
        
      </main>
    </BrowserRouter>
  )
}


