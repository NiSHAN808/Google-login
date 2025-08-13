import { Navigate } from "react-router-dom";
import Home from "./Home";

export default function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");
  return user ? <Home /> : <Navigate to="/login" />;
}
