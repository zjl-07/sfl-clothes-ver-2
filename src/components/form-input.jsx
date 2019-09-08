import React from "react";

const Input = ({ handleChange, label, ...rest }) => {
  console.log(rest);
  return (
    <div className="form-group">
      <input className="form-input" onChange={handleChange} {...rest}></input>
      {label ? (
        <label
          className={`${rest.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Input;
