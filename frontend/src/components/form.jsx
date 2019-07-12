import React from "react";
import Input from "./input";
import Select from "./select";

const Form = props => {
  return (
    <form>
      <div className="row border border-primary m-2">
        <div className="col">
          <Input
            label="Passenger Name"
            name="name"
            type="email"
            placeholder="Enter Passenger Name"
          />

          <Select label="Survived" name="survived" options={["Yes", "No"]} />
          <Select label="Sex" name="sex" options={["male", "female"]} />
          <Input
            label="Age"
            name="age"
            type="number"
            placeholder="Enter Passenger Age"
          />
        </div>
        <div className="col">
          <Select label="Pclass" name="pclass" options={[1, 2, 3]} />
          <Select label="Pclass" name="pclass" options={[1, 2, 3, 4, 5, 6]} />
          <Input
            label="Ticket"
            name="ticket"
            type="text"
            placeholder="Enter Passenger Ticket Details"
          />
          <Input
            label="Age"
            name="age"
            type="number"
            placeholder="Enter Passenger Age"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
