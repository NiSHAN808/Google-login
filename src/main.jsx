import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Page2 from "./page2";
import Login from "./Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
  },
  { path: "/f", element: <Page2 /> },
  { path: "/login", element: <Login /> },
  {
    path: "/g",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
]);

import { GoogleOAuthProvider } from "@react-oauth/google";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";

const clientId =
  "97028744224-0fn9qr0aiu5amhtid3n0hc6p508d7k6j.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
