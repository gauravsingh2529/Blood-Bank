import React from "react";
import Form from "../components/shared/Form/Form";

import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img
              src="/S-img.webp"
              alt="register img"
              style={{ paddingTop: "5%" }}
            />
          </div>
          <div
            className="col-md-4 form-container "
            style={{
              background: "linear-gradient(to bottom, #FFECD2, #FCB69F)", // Apply gradient background
              color: "#333", // Ensure text color is visible against gradient
              padding: "20px", // Optional: Add padding for better spacing
              borderRadius: "8px", // Optional: Add rounded corners
            }}
          >
            <Form
              formTital={"Singup Page"}
              submitBtn={"Singup"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
