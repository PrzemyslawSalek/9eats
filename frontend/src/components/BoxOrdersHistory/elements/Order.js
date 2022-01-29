import React, { Component } from "react";
import { Card } from "reactstrap";
import { formatCash } from "../../../utils";

import "./Order.css";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  setOrderClass = () => {
    const { selected } = this.state;
    const { ordersSelected } = this.props;

    if (ordersSelected) {
      return selected ? "order" : "order unselected-order";
    } else {
      return "order";
    }
  };

  selectOnClick = () => {
    const { selected } = this.state;
    const { order, addOrder, removeOrder } = this.props;

    if (!order.paid) {
      this.setState({ selected: !selected });
      return selected ? removeOrder(order) : addOrder(order);
    }
  };

  render() {
    const { order } = this.props;

    return (
      <Card className={this.setOrderClass()} onClick={this.selectOnClick}>
        <div className="order__title-content">
          <div className="order__title">
            {`Zamówienie ${new Date(order.timestamp).toLocaleDateString()}`}
          </div>
          {order.paid ? (
            <div className="order__status paid">Opłacone</div>
          ) : (
            <div className="order__status">Nieopłacone</div>
          )}
        </div>
        <div className="order__dishes">
          {order.dishes &&
            order.dishes.map((dish, key) => (
              <div className="order__dish" key={key}>
                {`> ${dish.name}`}
              </div>
            ))}
        </div>
        <div className="order__price">{`Cena: ${formatCash(order.price)}`}</div>
      </Card>
    );
  }
}

export default Order;
