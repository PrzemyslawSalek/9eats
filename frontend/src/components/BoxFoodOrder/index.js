import React, { Component } from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PaystackConsumer } from "react-paystack";
import { config } from "../../paymentGateway";
import { UserContext } from "../../containers/pages/CustomPage"

import { formatCash } from "../../utils";

import FoodOptions from "./elements/FoodOptions";

import "./BoxFoodOrder.css";

class BoxFoodOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: 0.00,
      orders: [],
      food: [],
      orderId: undefined
    };
  }

  componentDidMount = () => {
    axios
      .get("/eats/today/")
      .then((res) => {
        const formatedData = res.data.map(function (el) {
          return {
            id: el.id,
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
          id: el.id,
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
        id: order.id,
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
    const background = document.querySelector(".modal-background");
    modal.style.display = "flex";
    background.style.display = "flex";
  };

  payLaterOnClick = () => {
    const background = document.querySelector(".modal-background");
    background.style.display = "none";
    this.props.navigation("/");
  };

  closeModal = () => {
    const modal = document.querySelector(".box-food-order__modal");
    const background = document.querySelector(".modal-background");
    modal.style.display = "none";
    background.style.display = "none";
  };

  submitOrder = () => {
    axios
      .post(`/orders/orders/`, {
        dishes: this.state.orders,
      })
      .then((res) => {
        this.setState({ orderId: res.data.id });
        this.showModal();
      })
      .catch((res) => console.log(res));
  };

  handleSuccess = (reference) => {
    axios
      .post(`/orders/paid/`, {
        paid: [this.state.orderId]
      })
      .then((res) => {
        this.setState({ orderId: res.data.id });
      })
      .catch((res) => console.log(res));
  };

  handleClose = () => {
    this.payLaterOnClick();
  }

  render() {
    const { currentPrice, orders } = this.state;
    const componentProps = {
      ...config(currentPrice.toString().replace(".", ""), this.props.user?.user?.email),
      text: "Paystack Button Implementation",
      onSuccess: (reference) => this.handleSuccess(reference),
      onClose: this.handleClose,
    };

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
        <div className="box-food-order__modal">
          <div className="box-food-order__modal-content">
            <span
              className="box-food-order__modal-close"
              onClick={this.closeModal}
            >
              &times;
            </span>
            <div className="box-food-order__modal-title">
              Zamówienie złożone!
            </div>
            <div className="box-food-order__modal-buttons">
              <PaystackConsumer {...componentProps}>
                {({ initializePayment }) => (
                  <Button
                    className="button-submit"
                    onClick={() =>{
                      const modal = document.querySelector(".box-food-order__modal");
                      const background = document.querySelector(".modal-background");
                      modal.style.display = "none";
                      background.style.display = "none";
                      initializePayment(this.handleSuccess, this.handleClose)
                    }
                    }
                  >
                    Zapłać teraz
                  </Button>
                )}
              </PaystackConsumer>
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
  const user = React.useContext(UserContext); 

  return <BoxFoodOrder {...props} navigation={navigation} user={user}/>;
}
