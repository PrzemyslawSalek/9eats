import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

import "./SquareElement.css";

class SquareElement extends Component {
  handleOnClick = () => {
    this.props.navigation(this.props.path);
  };

  render() {
    const { title, imageSrc } = this.props;

    return (
      <div className="square-element" onClick={this.handleOnClick}>
        <p className="square-element__title">{title}</p>
        <img
          className="square-element__image img-fluid rounded-circle mr-2"
          alt="button-img"
          src={imageSrc}
        />
      </div>
    );
  }
}

export default function (props) {
  const navigation = useNavigate();

  return <SquareElement {...props} navigation={navigation} />;
}
