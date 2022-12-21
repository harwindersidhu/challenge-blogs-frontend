import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BlogContextProvider } from "./context/BlogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BlogContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BlogContextProvider>
);
