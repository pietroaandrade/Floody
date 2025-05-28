//Components
import Map from "../components/Map/Map"
import Dashboard from "../components/Dashboard/Dashboard"
import Navbar from "../components/Navbar/Navbar"




export default function App() {
  

  return (
    <main className="grid grid-cols-2-[220px_1fr] gap-4 p-4">
      <Navbar />
      <Dashboard />
     
    </main>
  )
}


