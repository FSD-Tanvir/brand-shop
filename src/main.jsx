import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import AuthProvider from "./provider/AuthProvider";
import PropsProvider from "./provider/PropsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <PropsProvider>
        <RouterProvider router={routes} />
      </PropsProvider>
    </AuthProvider>
  </React.StrictMode>
);
