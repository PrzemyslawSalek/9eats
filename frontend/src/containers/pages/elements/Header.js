import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import {
  Navbar,
  NavLink,
  Container,
  NavbarBrand,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

import AvatarPhoto from "../../../images/avatar.jpeg";
import LogoPhoto from "../../../images/logo.svg";

import "./Header.css";

const cookies = new Cookies();
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      logged: cookies.get("access"),
    };
  }

  componentDidMount = () => {
    cookies.addChangeListener(this.onCookieChange);
  };

  onCookieChange = () => {
    this.setState({ logged: cookies.get("access") });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  logIn = () => {
    this.props.navigation("/login");
  };

  logOut = () => {
    cookies.remove("access");
  };

  goOnWelcomePage = () => {
    this.props.navigation("/");
  };

  renderProfileButton = () =>
    !this.state.logged ? (
      <NavLink className="header__navlink" onClick={this.logIn}>
        Zaloguj się
      </NavLink>
    ) : (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <img
          className="header__image img-fluid rounded-circle mr-2"
          alt="avatar"
          src={AvatarPhoto}
        />
        <DropdownToggle caret className="header__dropdown-toggle">
          Szymon Sala
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Profil</DropdownItem>
          <DropdownItem>Twoje zamówienia</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={this.logOut}>Wyloguj</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );

  render() {
    return (
      <div className="header">
        <Navbar className="header__navbar">
          <Container className="header__containter">
            <NavbarBrand
              className="header__navbar-brand"
              onClick={this.goOnWelcomePage}
            >
              <img className="header__logo" alt="9eats" src={LogoPhoto} /> eats
            </NavbarBrand>
            {this.renderProfileButton()}
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default function (props) {
  const navigation = useNavigate();

  return <Header {...props} navigation={navigation} />;
}
