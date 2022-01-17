import React, { Component } from "react";
import { Card } from "reactstrap";

import "./Order.css";

class Order extends Component {
  render() {
    const { order } = this.props;

    return (
      <Card className="order">
        <div className="order__title-content">
          <div className="order__title">Zamówienie 17.01.2022</div>
          {order.paid ? (
            <div className="order__status paid">Opłacone</div>
          ) : (
            <div className="order__status">Nieopłacone</div>
          )}
        </div>
        {order.dishes &&
          order.dishes.map((dish, key) => (
            <div className="order__dish" key={key}>
              {dish.name}
            </div>
          ))}
      </Card>
    );
  }
}

export default Order;
