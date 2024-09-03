import React from "react";
import Form from "../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../components/shared/Spinner";
import { toast } from "react-toastify";
const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="\L-img.webp" alt="Login img" />
          </div>
          <div
            className="col-md-4 form-container"
            style={{
              background: "linear-gradient(to left, #A1C4FD, #FCB69F)", // Apply gradient background
              color: "#333", // Ensure text color is visible against gradient
              padding: "20px", // Optional: Add padding for better spacing
              borderRadius: "8px", // Optional: Add rounded corners
            }}
          >
            <Form
              formTital={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
