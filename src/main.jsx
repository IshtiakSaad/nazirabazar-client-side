import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthContext/AuthProvider";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ToastContainer/>
          <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);

// https://nazirabazar-server.vercel.app/
