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

class NewPalletRackProjectContainer extends Component {
  constructor(props) {
    super(props);

    const defaultProjectSpecs = this.props.defaultProjectSpecs;
    this.state = {
      selectedShelfOption: defaultProjectSpecs.shelfType
    };
  }

  componentDidMount() {
    console.log("HomeContainer componentDidMount");
  }

  componentDidUpdate() {
    console.log("HomeContainer componentDidUpdate");
  }

  btnClickLogout() {
    console.log("btnClickLogout");
    this.props.logOut();
  }

  createNewProject() {
    browserHistory.push({ pathname: "/newpalletrackproject" });
  }
  render() {
    const defaultProjectSpecs = this.props.defaultProjectSpecs;

    var trBays = [];
    trBays = null;
    trBays = [];
    trBays.length = 0;
    if (trBays.length > 0) trBays = [];

    for (var i = 0; i < defaultProjectSpecs.bays.length; i++) {
      trBays.push(
        <tr key={"trBaysWithValues" + "tr" + i}>
          <td>{i}</td>
          <td>
            <FormControl
              type="text"
              // placeholder="12"
              id={"id-bay" + i + "-length"}
              defaultValue={defaultProjectSpecs.bays[i].length}
            />
          </td>
          <td>
            <FormControl
              type="text"
              // placeholder="10"
              id={"id-bay" + i + "-qty"}
              defaultValue={defaultProjectSpecs.bays[i].qty}
            />
          </td>
          <td>
            <FormControl
              type="text"
              // placeholder="5"
              id={"id-bay" + i + "-levels"}
              defaultValue={defaultProjectSpecs.bays[i].levels}
            />
          </td>
          <td>
            <FormControl
              type="text"
              // placeholder="3000"
              id={"id-bay" + i + "-loadPerLevel"}
              defaultValue={defaultProjectSpecs.bays[i].loadPerLevel}
            />
          </td>
        </tr>
      );
    }

    if (trBays.length < 4) {
      for (var j = trBays.length; j < 4; j++) {
        trBays.push(
          <tr key={"trBays" + "tr" + j}>
            <td>{j}</td>
            <td>
              <FormControl
                type="text"
                // placeholder="12"
                id={"id-bay" + j + "-length"}
                defaultValue=""
              />
            </td>
            <td>
              <FormControl
                type="text"
                // placeholder="10"
                id={"id-bay" + j + "-qty"}
                defaultValue=""
              />
            </td>
            <td>
              <FormControl
                type="text"
                // placeholder="5"
                id={"id-bay" + j + "-levels"}
                defaultValue=""
              />
            </td>
            <td>
              <FormControl
                type="text"
                // placeholder="3000"
                id={"id-bay" + j + "-loadPerLevel"}
                defaultValue=""
              />
            </td>
          </tr>
        );
      }
    }

    let headerText = "";
    if (
      defaultProjectSpecs._id === null ||
      defaultProjectSpecs._id === undefined
    ) {
      headerText = "New Pallet Rack Specs";
    } else {
      headerText = "Edit Pallet Rack Specs";
    }

    return (
      <div>
        New Pallet Rack Project Container
        <div>
          {headerText}
          <form className="testbg-1">
            <div className="container-fluid row">
              <div className="col-sm-6 testbg-1">
                <h4>Project Settings</h4>
                <div className="well">
                  <FormGroup controlId="formControlsTextarea">
                    <div className="row">
                      <div className="col-xs-6">
                        <ControlLabel>Company Name</ControlLabel>
                        <FormControl
                          type="text"
                          id="id-company-name"
                          required="true"
                          defaultValue={
                            defaultProjectSpecs.projectSettings.companyName
                          }
                        />
                      </div>
                      <div className="col-xs-6">
                        <ControlLabel>Project Title</ControlLabel>
                        <FormControl
                          type="text"
                          defaultValue={
                            defaultProjectSpecs.projectSettings.projectTitle
                          }
                          id="id-project-title"
                        />
                      </div>
                    </div>
                  </FormGroup>

                  <div className="row">
                    <div className="col-xs-6">
                      <ControlLabel>Racks Description</ControlLabel>
                      <FormControl
                        type="text"
                        id="id-racks-description"
                        defaultValue={
                          defaultProjectSpecs.projectSettings.racksDescription
                        }
                      />
                    </div>
                    <div className="col-xs-6">
                      <ControlLabel>Current Metal Price</ControlLabel>
                      <FormControl
                        type="text"
                        defaultValue={
                          defaultProjectSpecs.projectSettings.currentMetalPrices
                        }
                        id="id-current-metal-prices"
                      />
                    </div>
                  </div>
                </div>

                <h4>Frame</h4>
                <div className="well">
                  <Table className="borderless table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Height (ft)</th>
                        <th>Depth</th>
                        <th>Qty.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <FormControl
                            type="text"
                            // placeholder="15"
                            id="id-frame1-height"
                            defaultValue={defaultProjectSpecs.frame.frameHeight}
                          />
                        </td>
                        <td>
                          <FormControl
                            type="text"
                            // placeholder="3"
                            id="id-frame1-depth"
                            defaultValue={defaultProjectSpecs.frame.frameDepth}
                          />
                        </td>
                        <td>
                          <FormControl
                            type="text"
                            // placeholder="10"
                            id="id-frame1-qty"
                            defaultValue={defaultProjectSpecs.frame.frameQty}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="col-sm-6 testbg-2">
                <h4>Bays</h4>
                <div className="well">
                  <Table className="borderless table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Length (ft)</th>
                        <th>Qty.</th>
                        <th>Levels</th>
                        <th>Load per Level (kgs)</th>
                      </tr>
                    </thead>
                    <tbody>{trBays}</tbody>
                  </Table>
                </div>

                <div className="well">
                  <FormGroup>
                    <ControlLabel>Select Shelf Type: </ControlLabel>
                    <br />
                    <Radio
                      inline
                      name="option"
                      id="id-radio-noshelf"
                      onChange={this.handleOptionChange}
                      value="noShelf"
                      checked={this.state.selectedShelfOption === "noShelf"}
                    >
                      No Shelf (Pallet Only)
                    </Radio>{" "}
                    <Radio
                      inline
                      name="option"
                      onChange={this.handleOptionChange}
                      value="metalShelf1.0mm"
                      checked={
                        this.state.selectedShelfOption === "metalShelf1.0mm"
                      }
                    >
                      Metal Shelf 1.0mm
                    </Radio>{" "}
                    <Radio
                      inline
                      name="option"
                      onChange={this.handleOptionChange}
                      value="metalShelf1.2mm"
                      checked={
                        this.state.selectedShelfOption === "metalShelf1.2mm"
                      }
                    >
                      Metal Shelf 1.2mm
                    </Radio>{" "}
                    <Radio
                      inline
                      name="option"
                      onChange={this.handleOptionChange}
                      value="metalShelf1.5mm"
                      checked={
                        this.state.selectedShelfOption === "metalShelf1.5mm"
                      }
                    >
                      Metal Shelf 1.5mm
                    </Radio>{" "}
                    <Radio
                      inline
                      name="option"
                      onChange={this.handleOptionChange}
                      value="metalShelf2.0mm"
                      checked={
                        this.state.selectedShelfOption === "metalShelf2.0mm"
                      }
                    >
                      Metal Shelf 2.0mm
                    </Radio>
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="container-fluid testbg-1 text-center">
              <Button onClick={this.btnGenerateQuote} bsStyle="primary">
                Generate Quote
              </Button>
              <br />
              <br />
              <Button onClick={this.btnCancel} bsStyle="default" bsSize="small">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

NewPalletRackProjectContainer.propTypes = {
  logOut: PropTypes.func.isRequired,
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
)(NewPalletRackProjectContainer);
