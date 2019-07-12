import React, { Component } from "react";
import Card from "./card";

class Home extends Component {
  state = {
    passengers: []
  };
  componentDidMount() {
    return;
  }
  render() {
    return (
      <div>
        <p>Titanic</p>
        <Card />
      </div>
    );
  }
}

export default Home;
