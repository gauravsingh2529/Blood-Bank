import React from "react";

const Input = ({ name, inputType, value, onChange, labelFor, labelText,decpText }) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={labelFor} className="form-label">
          {labelText}
        </label>
        <input
          type={inputType}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
        <div id="Help" className="form-text">
          {decpText}
        </div>
      </div>
    </>
  );
};

export default Input;
