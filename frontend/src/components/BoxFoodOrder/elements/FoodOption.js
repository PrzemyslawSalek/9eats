import React, { Component } from "react";
import { Card } from "reactstrap";

import OrderButton from "./OrderButton";
import IngredientButton from "./IngredientButton";
import IngredientDropdown from "./IngredientDropdown";

import "./FoodOption.css";

class FoodOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      selectedIngredient: "",
      ingredients: [
        { name: "ziemniaki", main: false },
        { name: "frytki", main: false },
        { name: "ryż", main: false },
        { name: "kasza gryczana", main: false },
        { name: "kasza pęczak", main: false },
      ],
    };
  }

  componentDidMount() {
    const filter = this.props.option.ingredients.map((x) => {
      return x;
    });

    const filtered = this.state.ingredients.map((x) => {
      if (filter.includes(x.name)) {
        return {
          name: x.name,
          main: true,
        };
      } else {
        return {
          name: x.name,
          main: false,
        };
      }
    });
    this.setState({ ingredients: filtered });
  }

  setIngredient = (ingredient) => {
    this.setState({ selectedIngredient: ingredient });
  };

  addOrderWithSelectedIngredient = (order) => {
    const orderWithIngredient = {
      ...order,
      selectedIngredient: this.state.selectedIngredient,
    };

    this.props.addOrder(orderWithIngredient);
  };

  changeCounter = (counter) => {
    this.setState({ counter: counter });
  };

  render() {
    const { counter, ingredients, selectedIngredient } = this.state;
    const { option, removeOrder } = this.props;

    return (
      <Card className="food-option__card">
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
                    counter={counter}
                  />
                ))}
              <IngredientDropdown
                ingredients={ingredients}
                selectedIngredient={selectedIngredient}
                setIngredient={this.setIngredient}
                counter={counter}
              />
            </div>
          </div>
          <div className="food-option__button">
            {
              <OrderButton
                option={option}
                addOrder={this.addOrderWithSelectedIngredient}
                removeOrder={removeOrder}
                selectedIngredient={selectedIngredient}
                setIngredient={this.setIngredient}
                counter={counter}
                changeCounter={this.changeCounter}
              />
            }
          </div>
        </div>
      </Card>
    );
  }
}

export default FoodOption;
