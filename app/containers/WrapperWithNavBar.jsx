import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import { LinkContainer } from "react-router-bootstrap";
import { Router, Route, Link, IndexRoute, browserHistory } from "react-router";

var ReactBootstrap = require("react-bootstrap");
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var Nav = ReactBootstrap.Nav;

var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.NavItem;
var Button = ReactBootstrap.Button;
// var Nav = ReactBootstrap.Nav;

// Task component - represents a single todo item
class WrapperWithNavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="no-margin">
        <Navbar.Header>
          <LinkContainer to="/" style={{ cursor: "pointer" }}>
            <Navbar.Brand>
              <div style={{ cursor: "pointer" }}>React-Bootstrap</div>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/home">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/home">
              <NavItem eventKey={1}>New Quote</NavItem>
            </LinkContainer>

            <LinkContainer to="/home">
              <NavItem eventKey={1}>View All</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

WrapperWithNavBar.propTypes = {};

export default WrapperWithNavBar;
