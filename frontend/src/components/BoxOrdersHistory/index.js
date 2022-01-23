import React, { Component } from "react";
import { Card, Container } from "reactstrap";

import OrdersList from "./elements/OrdersList";

import "./BoxOrdersHistory.css";

// przy kazdym zamowieniu musi byc id, price, date
const mockOrders = [
  {
    id: 0,
    dishes: [
      {
        name: "Kopytka",
        amount: "5",
        price: "56.00",
        ingredients: "Ziemniaki",
      },
      {
        name: "Kotlet",
        amount: "1",
        price: "16.00",
        ingredients: "Ziemniaki",
      },
    ],
    price: "72.00",
    paid: true,
    completed: true,
  },
  {
    id: 1,
    dishes: [
      {
        name: "Kopytka",
        amount: "5",
        price: "56.00",
        ingredients: "Ziemniaki",
      },
      {
        name: "Kotlet",
        amount: "1",
        price: "16.00",
        ingredients: "Ziemniaki",
      },
    ],
    price: "72.00",
    paid: true,
    completed: true,
  },
  {
    id: 2,
    dishes: [
      {
        name: "Zupa",
        amount: "5",
        price: "56.00",
        ingredients: "",
      },
    ],
    price: "56.00",
    paid: false,
    completed: false,
  },
  {
    id: 3,
    dishes: [
      {
        name: "Kopytka",
        amount: "5",
        price: "56.00",
        ingredients: "Ziemniaki",
      },
      {
        name: "Kotlet",
        amount: "1",
        price: "16.00",
        ingredients: "Ziemniaki",
      },
    ],
    price: "72.00",
    paid: true,
    completed: true,
  },
  {
    id: 4,
    dishes: [
      {
        name: "Zupa",
        amount: "5",
        price: "56.00",
        ingredients: "",
      },
    ],
    price: "56.00",
    paid: false,
    completed: false,
  },
  {
    id: 5,
    dishes: [
      {
        name: "Zupa",
        amount: "5",
        price: "56.00",
        ingredients: "",
      },
    ],
    price: "56.00",
    paid: false,
    completed: false,
  },
];

class BoxOrdersHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOrders: [],
    };
  }

  addOrder = (order) => {
    this.setState({ selectedOrders: [...this.state.selectedOrders, order] });
  };

  removeOrder = (order) => {
    const filtered = this.state.selectedOrders.filter(function (el) {
      return el.id !== order.id;
    });
    this.setState({ selectedOrders: filtered });
  };

  render() {
    const { selectedOrders } = this.state;

    return (
      <div className="box-orders-history">
        <Card className="box-orders-history__card">
          <div className="box-orders-history__title">Historia zamówień</div>
          <OrdersList
            orders={mockOrders}
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
