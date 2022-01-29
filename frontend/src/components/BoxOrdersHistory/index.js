import React, { Component } from "react";
import { Card, Container } from "reactstrap";
import axios from "axios";

import OrdersList from "./elements/OrdersList";

import "./BoxOrdersHistory.css";
class BoxOrdersHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      selectedOrders: [],
    };
  }

  componentDidMount() {
    this.getOrders();
  }

  sortOrders = (orders) => {
    let sortedOrders = orders;
    sortedOrders.sort(function (x, y) {
      let n = x.paid - y.paid;
      if (n !== 0) {
        return n;
      }
      return new Date(x.timestamp) - new Date(y.timestamp);
    });
    return sortedOrders;
  };

  getOrders = () => {
    axios
      .get("/orders/orders")
      .then((res) => this.setState({ orders: this.sortOrders(res.data) }))
      .catch((err) => console.log(err));
  };

  addOrder = (order) => {
    this.setState({ selectedOrders: [...this.state.selectedOrders, order] });
  };

  removeOrder = (order) => {
    const filtered = this.state.selectedOrders.filter(function (el) {
      return el.id !== order.id;
    });
    this.setState({ selectedOrders: filtered });
  };

  payForOrders = () => {
    const { selectedOrders } = this.state;

    if (selectedOrders.length > 0) {
      // PAY
      // pobranie orders na nowo
    }
  };

  render() {
    const { orders, selectedOrders } = this.state;

    console.log(orders);

    return (
      <div className="box-orders-history">
        <Card className="box-orders-history__card">
          <div className="box-orders-history__header">
            <div className="box-orders-history__title">Historia zamówień</div>
            <div
              className={
                selectedOrders.length > 0
                  ? "box-orders-history__pay-button active"
                  : "box-orders-history__pay-button"
              }
              onClick={this.payForOrders}
            >
              Zapłać
            </div>
          </div>
          <OrdersList
            orders={orders}
            addOrder={this.addOrder}
            removeOrder={this.removeOrder}
            ordersSelected={selectedOrders.length}
          />
        </Card>
      </div>
    );
  }
}

export default BoxOrdersHistory;
