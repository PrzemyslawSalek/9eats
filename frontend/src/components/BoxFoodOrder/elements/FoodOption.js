import React, { Component } from "react";

import OrderButton from "./OrderButton";
import IngredientButton from "./IngredientButton";
import IngredientDropdown from "./IngredientDropdown";

import "./FoodOption.css";

class FoodOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      selectedIngredient: "",
    };

    this.ingredients = [
      { name: "Ziemniaki", main: false },
      { name: "Frytki", main: false },
      { name: "Ryż", main: false },
      { name: "Kasza gryczana", main: false },
      { name: "Kasza pęczak", main: false },
    ];
  }

  setIngredient = (ingredient) => {
    this.setState({ selectedIngredient: ingredient });
  };

  addOrderWithSelectedIngredient = (order) => {
    const orderWithIngredient = {
      ...order,
      selectedIngredient: this.state.selectedIngredient,
    };

    console.log(orderWithIngredient);
    this.props.addOrder(orderWithIngredient);
  };

  render() {
    const { selectedIngredient } = this.state;
    const { option, addOrder, removeOrder } = this.props;

    return (
      <div className="food-option">
        <div className="food-option__dish">
          <div className="food-option__name">{option.name}</div>
          <div className="food-option__ingredients">
            {option.ingredients &&
              option.ingredients.map((name, key) => (
                <IngredientButton
                  key={key}
                  name={name}
                  selectedIngredient={selectedIngredient}
                  setIngredient={this.setIngredient}
                />
              ))}
            <IngredientDropdown
              ingredients={this.ingredients}
              selectedIngredient={selectedIngredient}
              setIngredient={this.setIngredient}
            />
          </div>
        </div>
        <div className="food-option__button">
          {
            <OrderButton
              option={option}
              addOrder={this.addOrderWithSelectedIngredient}
              removeOrder={removeOrder}
            />
          }
        </div>
      </div>
    );
  }
}

export default FoodOption;
