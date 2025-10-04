import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppDeclarative from "./routes/AppDeclarative";
import store from "./store/store";
import { Provider } from "react-redux";

/**
 * 1. create a configureStore
 * 2. Wrap our application in Provider from react-redux
 */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppDeclarative />
    </Provider>
  </StrictMode>
);

// user information
// todos
//
