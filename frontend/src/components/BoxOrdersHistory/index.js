import React, { Component } from "react";
import axios from "axios";
import { PaystackConsumer } from "react-paystack";
import { config } from "../../paymentGateway";
import { UserContext } from "../../containers/pages/CustomPage"

import OrdersList from "./elements/OrdersList";

import "./BoxOrdersHistory.css";
class BoxOrdersHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      selectedOrders: [],
      currentPrice: 0,
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
    this.setState({ currentPrice: this.state.currentPrice + order.price });
  };

  removeOrder = (order) => {
    const filtered = this.state.selectedOrders.filter(function (el) {
      return el.id !== order.id;
    });
    this.setState({ selectedOrders: filtered });
    this.setState({ currentPrice: this.state.currentPrice - order.price });
  };

  handleSuccess = (reference) => {
    const { selectedOrders } = this.state;

    const id = []
    selectedOrders.map((e)=>{id.push(e.id)})

    axios
      .post(`/orders/paid/`, {
        paid: id,
      })
      .then((res) => {
        this.getOrders();
        this.setState({selectedOrders:[]})
        this.setState({currentPrice: 0})
      })
      .catch((res) => console.log(res));
  };

  render() {
    const { orders, selectedOrders, currentPrice } = this.state;

    const componentProps = {
      ...config(
        currentPrice.toString().replace(".", ""),
        this.props.user?.user?.email
      ),
      text: "Paystack Button Implementation",
      onSuccess: (reference) => this.handleSuccess(reference),
      onClose: this.handleClose,
    };

    return (
      <div className="box-orders-history">
        <div className="box-orders-history__header">
          <div className="box-orders-history__title">Historia zamówień</div>
          <PaystackConsumer {...componentProps}>
            {({ initializePayment }) => (
              <div
                className={
                  selectedOrders.length > 0
                    ? "box-orders-history__pay-button--active"
                    : "box-orders-history__pay-button"
                }
                onClick={() =>
                  initializePayment(this.handleSuccess, this.handleClose)
                }
              >
                Zapłać
              </div>
            )}
          </PaystackConsumer>
        </div>
        <OrdersList
          orders={orders}
          addOrder={this.addOrder}
          removeOrder={this.removeOrder}
          ordersSelected={selectedOrders.length}
        />
      </div>
    );
  }
}

export default function (props) {
  const user = React.useContext(UserContext);

  return <BoxOrdersHistory {...props} user={user} />;
}
