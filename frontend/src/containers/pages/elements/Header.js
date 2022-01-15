import React, { Component } from "react";
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

import "./Header.css";

const cookies = new Cookies();
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      logged: cookies.get("userToken"),
    };
  }

  componentDidMount = () => {
    cookies.addChangeListener(this.onCookieChange);
  };

  onCookieChange = () => {
    this.setState({ logged: cookies.get("userToken") });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  logIn = () => {
    cookies.set("userToken", "Pacman", { path: "/" });
  };

  logOut = () => {
    cookies.remove("userToken");
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
          src="https://3x.nd0.pl/assets/avatar-31f1348e654704c4dbc8bc12a8e537e904b8accd248c4dea55ae0e8af9fe8159.jpg"
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
            <NavbarBrand className="header__navbar-brand" href="/">
              <img
                className="header__logo"
                alt=""
                src="https://api-appsoup.9bits.com/uploads/5f89e1ff/ce/ce7cee4d63b696f72de76c7f9652fe5c/logo9bits-wh.svg"
              />{" "}
              eats
            </NavbarBrand>
            {this.renderProfileButton()}
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
