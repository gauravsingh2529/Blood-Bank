import React, { useState } from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTital }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar"); // Default role
  const [name, setName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [organizationName, setOrganizationName] = useState(""); // Changed from organationName
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "register")
            return handleRegister(
              e,
              email,
              password,
              role,
              name,
              hospitalName,
              organizationName,
              website,
              address,
              phone
            );
        }}
      >
        <h1 className="text-center">{formTital}</h1>
        <hr />
        <div className="d-flex mb-3">
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donarRadio"
              value="donar"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "donar"}
            />
            <label htmlFor="donarRadio" className="form-check-label">
              Donar
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value="admin"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "admin"}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value="hospital"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "hospital"}
            />
            <label htmlFor="hospitalRadio" className="form-check-label">
              Hospital
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organizationRadio"
              value="organization"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "organization"}
            />
            <label htmlFor="organizationRadio" className="form-check-label">
              Organization
            </label>
          </div>
        </div>

        {formType === "login" && (
          <>
            <Input
              labelText={"Email"}
              labelFor={"forEmail"}
              inputType={"email"}
              name={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              decpText={"We will Never Share Your Email"}
            />
            <Input
              labelText={"Password"}
              labelFor={"forPassword"}
              inputType={"password"}
              name={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              decpText={"We will Never Share Your Password"}
            />
          </>
        )}

        {formType === "register" && (
          <>
            <Input
              labelText={"Email"}
              labelFor={"forEmail"}
              inputType={"email"}
              name={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              labelText={"Password"}
              labelFor={"forPassword"}
              inputType={"password"}
              name={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {(role === "admin" || role === "donar") && (
              <Input
                labelText={"Name"}
                labelFor={"forName"}
                inputType={"text"}
                name={"name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            {role === "organization" && (
              <Input
                labelText={"Organization Name"}
                labelFor={"forOrganization"}
                inputType={"text"}
                name={"organizationName"}
                value={organizationName} // Changed to organizationName
                onChange={(e) => setOrganizationName(e.target.value)}
              />
            )}
            {role === "hospital" && (
              <Input
                labelText={"Hospital Name"}
                labelFor={"forHospitalName"}
                inputType={"text"}
                name={"hospitalName"}
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
              />
            )}
            <Input
              labelText={"Website"}
              labelFor={"forWebsite"}
              inputType={"text"}
              name={"website"}
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              decpText={"*Optional*"}
            />
            <Input
              labelText={"Address"}
              labelFor={"forAddress"}
              inputType={"text"}
              name={"address"}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              labelText={"Phone Number"}
              labelFor={"forPhoneNumber"}
              inputType={"text"}
              name={"phone"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </>
        )}

        <div className="d-flex flex-row justify-content-between">
          {formType === "login" ? (
            <p>
              Not registerd yet .? <Link to={"/register"}>Register</Link>
            </p>
          ) : (
            <p>
              Allready user. <Link to={"/login"}>Login</Link>
            </p>
          )}
          <button className="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
