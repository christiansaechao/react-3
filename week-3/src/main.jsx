import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppDeclarative from "./routes/AppDeclarative";
import AppDataRouter from "./routes/AppDataRouter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Use the data router (RouterProvider) so loaders and useLoaderData work */}
    {/* <AppDataRouter /> */}
    {/* If you prefer the declarative BrowserRouter version, swap these: */}
    <AppDeclarative />
  </StrictMode>
);
