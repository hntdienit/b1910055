import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { AuthContext } from "../../helpers/Context/AuthContext";

function ProtectedRoute({ role, children }) {
  const { auth } = useContext(AuthContext);

  const token = localStorage.getItem("accessToken");

  let Content = "";
  switch (role) {
    case undefined:
      Content = children;
      break;
    case "user":
      if (auth.id !== 0) Content = children;
      else {
        toast.info("You need to log in before using this feature!", {});
        Content = <Navigate to="/login" replace />;
      }
      break;
    case "admin":
      // if (auth.status === true) {
      if (token) {
        const decoded = jwtDecode(token);
        if (decoded.sub.role === "admin") Content = children;
        else {
          Content = <Navigate to="/P404" replace />;
        }
      } else {
        Content = <Navigate to="/login" replace />;
      }
      break;
    default:
      throw new Error("Unknow role");
  }

  return Content;
}

export default ProtectedRoute;
