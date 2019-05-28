import React, { Component } from "react";
import { connect, browserHistory } from "react-router";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

// import WrapperWithNavBar from "./WrapperWithNavBar";
// import LoggedOutWrapperWithNavBar from "./LoggedOutWrapperWithNavBar";

import styles from "../css/main";
import ymtm from "../images/ymtm.png";
import favicon from "../images/favicon.png";
// import MEK from '../images/MEK.png';

var ReactBootstrap = require("react-bootstrap");
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var Nav = ReactBootstrap.Nav;
var MenuItem = ReactBootstrap.MenuItem;

// using SendGrid's v3 Node.js Library

// const cx = classNames.bind(styles);

/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
// const App = ({children}) => {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cssHasLoaded: false
    };
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    console.log("AppContainer componentDidMount");

    window.addEventListener("load", this.handleLoad);
  }
  handleLoad() {
    console.log("handleLoad"); //  $ is available here
    this.setState({
      cssHasLoaded: true
    });
  }

  componentDidUpdate() {
    console.log("AppContainer componentDidUpdate");
    const ss = document.styleSheets;
    console.log("ss.length", ss.length);
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        <div className={styles.headerWrapper2}>
          <div className={styles.headerWrapper}>
            <h4>Lets Roll !</h4>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
  isLoggedIn: PropTypes.bool
};

export default App;
