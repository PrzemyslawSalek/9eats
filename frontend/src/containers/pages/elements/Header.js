import React, { Component } from "react";
import { Navbar, Container, NavbarBrand } from "reactstrap";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <NavbarBrand href="#">Navbar</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
