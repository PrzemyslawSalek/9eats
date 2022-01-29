import React, { Component } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

import { formatCash } from "../../utils";

import FoodOptions from "./elements/FoodOptions";

import "./BoxFoodOrder.css";

const cookies = new Cookies();
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
      .then((res) => {
        const formatedData = res.data.map(function (el) {
          return {
            name: el.name,
            price: parseFloat(el.price),
            ingredients: el.ingredients,
          };
        });
        this.setState({ food: formatedData });
      })
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
          ingredients: el.selectedIngredient,
          amount: el.amount + 1,
        };
      } else {
        return el;
      }
    });
    if (!added) {
      filtered.push({
        name: order.name,
        price: order.price,
        ingredients: order.selectedIngredient,
        amount: 1,
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
        deductedPrice += el.price * el.amount;
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

  showModal = () => {
    const modal = document.querySelector(".box-food-order__modal");
    const closeBtn = document.querySelector(".box-food-order__modal-close");
    modal.style.display = "flex";
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  };

  payNowOnClick = () => {
    // bramka
  };

  payLaterOnClick = () => {
    this.props.navigation("/");
  };

  submitOrder = () => {
    axios
      .post(`/orders/orders/`, {
        dishes: this.state.orders,
      })
      .then(() => {
        this.showModal();
      })
      .catch((res) => console.log(res));
  };

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
                  {option.name} - {option.selectedIngredient} x{option.amount}
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
        <div class="box-food-order__modal">
          <div class="box-food-order__modal-content">
            <span class="box-food-order__modal-close">&times;</span>
            <div class="box-food-order__modal-title">Zamówienie złożone!</div>
            <div class="box-food-order__modal-buttons">
              <Button className="button-submit" onClick={this.payNowOnClick}>
                Zapłać teraz
              </Button>
              <Button className="button-cancel" onClick={this.payLaterOnClick}>
                Zapłać później
              </Button>
            </div>
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
