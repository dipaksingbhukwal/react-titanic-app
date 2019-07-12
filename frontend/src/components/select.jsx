import React from "react";

const Select = props => {
  return (
    <div className="form-group">
      <label for={props.name}>{props.label}</label>
      <select className="form-control" id={props.name}>
        {props.options.map(option => (
          <option>{option}</option>
        ))}

        {/* <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option> */}
      </select>
    </div>
  );
};

export default Select;
