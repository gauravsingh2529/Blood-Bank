import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import API from "../../services/API";
import { getCurrentuser } from "../Redux/featurs/authAction";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();

  //get curent user
  const getUser = async () => {
    try {
      const { data } = await API.get("/currentUser");
      if (data?.success) {
        dispatch(getCurrentuser(data));
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  });
  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
