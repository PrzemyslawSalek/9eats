import React, { Component } from "react";

import Footer from "./elements/Footer";
import Header from "./elements/Header";
import Main from "./elements/Main";
import axios from "axios";
import { getCookies } from "../../utils/cookies";

import "./CustomPage.css";

export const UserContext = React.createContext();

export default class CustomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };
  }

  componentDidMount() {
    if (this.props.title) {
      document.title = "9eats - " + this.props.title;
    } else {
      document.title = "9eats - Zamów i zapłać on-line";
    }
    if (getCookies().get("access") !== undefined) {
      this.fetchUserData();
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

  fetchUserData = () => {
    axios
      .get("/auth/me/")
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { mainPage } = this.props;
    const user = this.state.user
    const fetch = this.fetchUserData
    return (
      <div className="custom-page">
        <div className="modal-background" />
        <UserContext.Provider value={{user,fetch}}>
          <Header />
          <Main mainPage={mainPage} />
          <Footer />
        </UserContext.Provider>
      </div>
    );
  }
}
