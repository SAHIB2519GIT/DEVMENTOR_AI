import React from "react";
import ReactDOM from "react-dom/client";

import { Toaster } from "react-hot-toast";

import "./index.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <App />

    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          background: "#111827",
          color: "#fff",
          border: "1px solid #374151",
        },
      }}
    />

  </React.StrictMode>
);