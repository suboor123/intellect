import React from "react";
import { Navbar as Header, Nav } from "rsuite";
import { NavbarProps } from "./types";

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <Header appearance="subtle">
      <Header.Brand>
        <h5>Intellect</h5>
      </Header.Brand>
      <Nav>
        <Nav.Item onClick={() => onNavigate('circularSlider')}>Circular Range Slider</Nav.Item>
        <Nav.Item onClick={() => onNavigate('barRange')}>Range Bars</Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item>Login</Nav.Item>
      </Nav>
    </Header>
  );
};

export default Navbar;
