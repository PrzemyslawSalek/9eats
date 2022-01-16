import React, { Component } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { formatCash } from "../../utils";

import FoodOptions from "./elements/FoodOptions";

import "./BoxFoodOrder.css";

class BoxFoodOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: 0,
      orders: [],
      food: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("/eats/today/")
      .then((res) => this.setState({ food: res.data }))
      .catch((err) => console.log(err));
  };

  addOrder = (order) => {
    let added = false;
    let filtered = this.state.orders.map(function (el) {
      if (el.name === order.name) {
        added = true;
        return {
          name: el.name,
          price: el.price,
          ingredients: el.ingredients,
          size: el.size + 1,
        };
      } else {
        return el;
      }
    });
    if (!added) {
      filtered.push({
        ...order,
        size: 1,
      });
    }
    this.setState({
      orders: filtered,
      currentPrice: this.state.currentPrice + order.price,
    });
  };

  removeOrder = (order) => {
    let deductedPrice = 0;
    let filtered = this.state.orders.filter(function (el) {
      if (el.name === order.name) {
        deductedPrice += el.price * el.size;
        return false;
      }
      return true;
    });
    this.setState({
      orders: filtered,
      currentPrice: this.state.currentPrice - deductedPrice,
    });
  };

  onClickCancel = () => {
    this.props.navigation("/");
  };

  submitOrder = () => {};

  render() {
    const { currentPrice, orders } = this.state;

    return (
      <div className="box-food-order">
        <div className="box-food-order__title">Poniedziałek 16.01.2022</div>
        <FoodOptions
          foodOptions={this.state.food}
          addOrder={this.addOrder}
          removeOrder={this.removeOrder}
        />
        <div className="box-food-order__summary">
          <div className="box-food-order__summary-title">Podsumowanie</div>
          <div className="box-food-order__summary-content">
            {orders &&
              orders.map((option, key) => (
                <p key={key}>
                  {option.name} - {option.selectedIngredient} x{option.size}
                </p>
              ))}
            {`Wartość zamówienia: ${formatCash(currentPrice)}`}
          </div>
          <div className="box-food-order__summary-buttons">
            <Button className="button-submit" onClick={this.submitOrder}>
              Złóż zamówienie
            </Button>
            <Button className="button-cancel" onClick={this.onClickCancel}>
              Anuluj
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default function (props) {
  const navigation = useNavigate();

  return <BoxFoodOrder {...props} navigation={navigation} />;
}
