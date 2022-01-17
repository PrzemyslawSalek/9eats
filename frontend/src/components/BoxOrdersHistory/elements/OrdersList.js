import React, { Component } from "react";

import Order from "./Order";

import "./OrdersList.css";

class OrdersList extends Component {
  render() {
    const { orders } = this.props;

    return (
      <div className="orders-list">
        {orders &&
          orders.map((order, key) => <Order key={key} order={order} />)}
      </div>
    );
  }
}

export default OrdersList;
