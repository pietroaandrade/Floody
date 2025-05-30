//Components
import Navbar from "./components/Navbar/Navbar"
import Weather from "./components/WeatherAnalyst/Weather";
//Routes
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

export default function App() {
  return (
    <main className="grid grid-cols-2-[220px_1fr] gap-4 p-4">
      <Navbar />
      <Weather/>
    </main>
  )
}


