import React, { Component } from "react";
import { formatCash } from "../../../utils";

import "./OrderButton.css";

class OrderButton extends Component {
  onClickButton = () => {
    if (this.props.selectedIngredient && this.props.counter < 99) {
      this.props.addOrder(this.props.option);
      this.props.changeCounter(this.props.counter + 1);
    }
  };

  onClickClear = () => {
    this.props.setIngredient("");
    this.props.removeOrder(this.props.option);
    this.props.changeCounter(0);
  };

  render() {
    const { counter, option } = this.props;

    return (
      <div className="order-button">
        <div className="order-button__content" onClick={this.onClickButton}>
          <div className="order-button__price">{formatCash(option.price)}</div>
          {counter > 0 && (
            <div className="order-button__counter">{counter}</div>
          )}
        </div>
        {counter > 0 && (
          <div className="order-button__clear" onClick={this.onClickClear}>
            Wyczyść
          </div>
        )}
      </div>
    );
  }
}

export default OrderButton;
