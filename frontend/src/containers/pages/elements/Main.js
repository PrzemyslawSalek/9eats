import React, { Component } from "react";

import "./Main.css";

class Main extends Component {
  render() {
    const Box = this.props.mainPage;

    return (
      <div className="main">
        <Box />
      </div>
    );
  }
}

export default Main;
