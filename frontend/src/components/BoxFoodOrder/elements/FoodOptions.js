import React, { Component } from "react";
import FoodOption from "./FoodOption";

import "./FoodOptions.css";

class FoodOptions extends Component {
  render() {
    const { foodOptions, addOrder, removeOrder } = this.props;

    return (
      <div className="food-options">
        <div className="food-options__list">
          {foodOptions &&
            foodOptions.map((option, key) => (
              <FoodOption
                key={key}
                option={option}
                addOrder={addOrder}
                removeOrder={removeOrder}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default FoodOptions;
