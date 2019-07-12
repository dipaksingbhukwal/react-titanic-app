import axios from "axios";
import React, { Component } from "react";

import Table from "./table";
import Form from "./form";

class Home extends Component {
  state = {
    passengers: ""
  };
  async componentDidMount() {
    const { data } = await axios.get("http://localhost:5000/passangers/");
    const passengers = [...data];
    passengers.map(passenger => {
      if (passenger.Survived) passenger["Survived"] = "Yes";
      else passenger["Survived"] = "No";
    });

    this.setState({ passengers });
  }
  render() {
    const { passengers } = this.state;

    return (
      <div>
        <p>Titanic</p>
        <div className="container">
          <Form />
        </div>
        {passengers ? <Table data={passengers} /> : null}
      </div>
    );
  }
}

export default Home;
