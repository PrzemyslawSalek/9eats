import React, { Component } from "react";

import Footer from "./elements/Footer";
import Header from "./elements/Header";
import Main from "./elements/Main";

import "./CustomPage.css";

export default class CustomPage extends Component {
  componentDidMount() {
    if (this.props.title) {
      document.title = "9eats - " + this.props.title;
    } else {
      document.title = "9eats - Zamów i zapłać on-line";
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.title !== this.props.title) {
      if (this.props.title) {
        document.title = "9eats - " + this.props.title;
      } else {
        document.title = "9eats - Zamów i zapłać on-line";
      }
    }
  }

  render() {
    const { mainPage } = this.props;

    return (
      <div className="custom-page">
        <div className="modal-background" />
        <Header />
        <Main mainPage={mainPage} />
        <Footer />
      </div>
    );
  }
}
