import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";

// Loaders
async function homeLoader() {
  return { message: "Loaded Home via Data Router!" };
}
async function settingsLoader() {
  return { theme: "Dark Mode" };
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      { path: "about", element: <About /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { path: "settings", element: <Settings />, loader: settingsLoader },
        ],
      },
    ],
  },
]);
