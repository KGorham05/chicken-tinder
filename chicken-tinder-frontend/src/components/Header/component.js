import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export const Header = props => (
  <Navbar className="navbar navbar-expand-md navbar-light fixed-top bg-light">
    <Nav className="mr-auto">
      <NavItem>
        <NavLink href="/">Chicken Tinder</NavLink>
      </NavItem>
    </Nav>
    <Nav>
      <NavItem>
        <NavLink href="/messages">Messages</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);
