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

import { PricingTable } from "./helpers/PricingTable";
import { CostPriceAddOns } from "./helpers/PricingTable";
import { getUprightSpecsAndCost } from "./helpers/getUprightSpecsAndCost";
import { getBeamSpecsAndCost } from "./helpers/getBeamSpecsAndCost";
import { getBracingSpecsAndCost } from "./helpers/getBracingSpecsAndCost";
import { getBeamConnectorSpecsAndCost } from "./helpers/getBeamConnectorSpecsAndCost";
import { getBasePlateSpecsAndCost } from "./helpers/getBasePlateSpecsAndCost";
import { getNutBoltSpecsAndCost } from "./helpers/getNutBoltSpecsAndCost";
import { getShelfSpecsAndCost } from "./helpers/getShelfSpecsAndCost";
import { getTotalRacksQty } from "./helpers/getTotalRacksQty";
import { numberWithCommas } from "./helpers/numberWithCommas";
import { loadDefaultSpecs } from "./helpers/loadDefaultSpecs";

var ReactBootstrap = require("react-bootstrap");
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var Form = ReactBootstrap.Form;
var Table = ReactBootstrap.Table;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var Radio = ReactBootstrap.Radio;
var FieldGroup = ReactBootstrap.FieldGroup;
var Input = ReactBootstrap.Input;

class ShowQuoteContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarginChange = this.onMarginChange.bind(this);
    this.state = {
      margin: 0
    };
  }

  componentDidMount() {
    console.log("ShowQuoteContainer componentDidMount");
  }

  componentDidUpdate() {
    console.log("ShowQuoteContainer componentDidUpdate");
  }

  onMarginChange() {
    this.setState({ margin: Number($("#id-margin").val()) });
  }

  render() {
    return (
      <div>
        Show Quote
        <div className={[styles.testGreen, "container-fluid", "row"].join(" ")}>
          Hello World
          <div className="col-sm-6 testbg-2">
            <h4>Custom Quote</h4>
            <div className="well">
              <div className="col-xs-6">
                <Form horizontal>
                  <FormGroup controlId="formInlineMargin">
                    <ControlLabel>Increase Price(%): </ControlLabel>
                    <FormControl
                      type="text"
                      id="id-margin"
                      defaultValue={this.state.margin}
                      onChange={this.onMarginChange}
                    />
                  </FormGroup>
                </Form>
              </div>
              <div className="col-xs-6">
                <Form horizontal>
                  <FormGroup controlId="formInlineMargin">
                    <ControlLabel>Rate per Kg: </ControlLabel>
                    <FormControl
                      type="text"
                      id="id-margin"
                      defaultValue={this.state.margin}
                      onChange={this.onMarginChange}
                    />
                  </FormGroup>
                </Form>
              </div>
              <Table className="table">
                <thead>
                  <tr>
                    <th>Unit Price</th>
                    <th>Qty. of Racks</th>
                    <th>Total Project Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th />
                    <th />
                    <th />
                  </tr>
                </tbody>
              </Table>
              <Table className="table">
                <thead>
                  <tr>
                    <th>Unit Rack Weight</th>
                    <th>Total Project Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th />
                    <th />
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="col-sm-6 testbg-1">
            <h4>Racking Specs</h4>
            <div className="well">
              <Table className="table">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Item</th>
                    <th>Unit Weight</th>
                    <th>Qty.</th>
                    <th>Sub Total</th>
                  </tr>
                </thead>
                <tbody />
              </Table>
            </div>

            <h4>Specificaions</h4>
            <div className="well" />
          </div>
        </div>
        <div className="container-fluid testbg-1 text-center">
          <Button onClick={this.btnSaveAndClose} bsStyle="primary">
            Save and Close
          </Button>
          <br />
          <br />
          <Button onClick={browserHistory.goBack}>Go Back</Button>
        </div>
      </div>
    );
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
