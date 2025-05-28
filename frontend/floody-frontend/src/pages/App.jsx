//Components
import Map from "../components/Map/Map"
import Dashboard from "../components/Dashboard/Dashboard"
import Navbar from "../components/Navbar/Navbar"

//Styles
import "./App.css" 


export default function App() {
  

  return (
    <main className="grid gap-4 p-4 grid-columns-[220px]">
      <Navbar />
      <Dashboard />
     
    </main>
  )
}


