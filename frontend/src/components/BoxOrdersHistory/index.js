import React, { Component } from "react";
import { Card, Container } from "reactstrap";

import OrdersList from "./elements/OrdersList";

import "./BoxOrdersHistory.css";

const mockOrders = [
  {
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
    paid: true,
    completed: true,
  },
  {
    dishes: [
      {
        name: "Zupa",
        amount: "5",
        price: "56.00",
        ingredients: "",
      },
    ],
    paid: false,
    completed: false,
  },
];
class BoxOrdersHistory extends Component {
  render() {
    return (
      <Container className="box-orders-history">
        <Card className="box-orders-history__card">
          <OrdersList orders={mockOrders} />
        </Card>
      </Container>
    );
  }
}

export default BoxOrdersHistory;
