import React, { Component } from "react";
import LoginForm from "./elements/LoginForm";
import login from "./elements/login.png"
import RegistrationForm from "./elements/RegistrationForm";

import "./BoxAuth.css";

class BoxAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegistrationModal: false,
    };
  }

  toggleRegistrationModal = () => {
    this.setState({
      showRegistrationModal: !this.state.showRegistrationModal,
    });
  };

  render() {
    return (
      <main className="container box-auth">
        <div className="col-md-8 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="row">
              <div className="col box-auth__image-container">
                <img className="img-fluid" src={login}></img>
              </div>
              <div className="col">
                <LoginForm toggleRegistrationModal={this.toggleRegistrationModal} />
              </div>
            </div>
          </div>
        </div>
        <RegistrationForm
          show={this.state.showRegistrationModal}
          toggle={this.toggleRegistrationModal}
        />
      </main>
    );
  }
}

export default BoxAuth;
