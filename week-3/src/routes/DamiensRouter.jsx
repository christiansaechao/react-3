import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Sidebar from "../components/Sidebar";
import LoggedOut from "../pages/LoggedOut";
import { UserProvider } from "../userContext";

export default function DamiensRouter() {
  // localhost:5173/

  return (
    <BrowserRouter>
      <Sidebar />
      <UserProvider>
        <Routes>
          <Route path="about" element={<About />} />

          <Route path="/" element={<Home />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="/logged-out" element={<LoggedOut />} />
        </Routes>
      </UserProvider>
      <div>&copy; 2025</div>
    </BrowserRouter>
  );
}

// Home: (website main URL)/
// About (website main URL)/about
