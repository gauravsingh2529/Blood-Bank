import React from "react";
import Form from "../components/shared/Form/Form";

const Register = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner">
          <img
            src="/S-img.webp"
            alt="register img"
            style={{ paddingTop: "5%" }}
          />
        </div>
        <div
          className="col-md-4 form-container"
          style={{
            background: "linear-gradient(to bottom, #FFECD2, #FCB69F)",
            color: "#333",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Form formTital={"Signup Page"} submitBtn={"Signup"} formType={"register"} />
        </div>
      </div>
    </>
  );
};

export default Register;
