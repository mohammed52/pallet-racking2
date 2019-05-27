import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames/bind";
import { browserHistory } from "react-router";
import styles from "../css/components/homeStyles.css";
import ymtm from "../images/ymtm.png";
import { DEFAULT_SETTINGS } from "./helpers/defaultSettings";
import {
  setAmount,
  setSourceOfIncome,
  setPurpose,
  setRepeatApply
} from "../actions/selectedOptionsActions";
import { removeZeroValueBays } from "./helpers/removeZeroValueBays";

import { logOut } from "../actions/users";

var ReactBootstrap = require("react-bootstrap");
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var Radio = ReactBootstrap.Radio;
var Table = ReactBootstrap.Table;
var FieldGroup = ReactBootstrap.FieldGroup;
var Input = ReactBootstrap.Input;

class ShowQuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedShelfOption: defaultProjectSpecs.shelfType
    };
  }

  componentDidMount() {
    console.log("ShowQuoteContainer componentDidMount");
  }

  componentDidUpdate() {
    console.log("ShowQuoteContainer componentDidUpdate");
  }

  render() {
    return <div>Show Quote Container</div>;
  }
}

ShowQuoteContainer.propTypes = {
  // logOut: PropTypes.func.isRequired,
  defaultProjectSpecs: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    selectedOptions: state.selectedOptions,
    defaultProjectSpecs: state.newPalletRackProjectSpecs
    // newTopic: state.topic.newTopic
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // switchFlag(newVal){
    //   console.log("newVal")
    //   console.log(newVal)
    //   dispatch(updateModalFlag(newVal))
    // }
  };
};

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowQuoteContainer);
