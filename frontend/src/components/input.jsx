import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <label for={props.name}>{props.label}</label>
      <input
        name={props.name}
        id={props.name}
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
