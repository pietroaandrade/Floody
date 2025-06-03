//Components
import Navbar from "./components/Navbar/Navbar"
import Weather from "./components/WeatherAnalyst/Weather";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/login/signup/Login";
import Signup from "./components/login/signup/Signup";
//Routes
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/" || location.pathname === "/signup";
  const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        staleTime: 5*60*1000,
        gcTime: 10*60*1000,
        retry: false,
        refetchOnWindowFocus: false
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/*"
          element={
            !isAuthPage && (
              <main className="grid grid-cols-2-[220px_1fr] gap-4 p-4">
                <Navbar />
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="weather" element={<Weather />} />
                </Routes>
              </main>
            )
          }
        />
      </Routes>
    </QueryClientProvider >
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}


