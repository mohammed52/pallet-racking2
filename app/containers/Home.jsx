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

class Home extends Component {
  constructor(props) {
    super(props);
    this.handlePurposeOptionChange = this.handlePurposeOptionChange.bind(this);
    this.handleincomeSourceOptionChange = this.handleincomeSourceOptionChange.bind(
      this
    );
    this.handlerepeatApplyOptionsChange = this.handlerepeatApplyOptionsChange.bind(
      this
    );
    this.btnClickGetDocList = this.btnClickGetDocList.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.btnClickLogout = this.btnClickLogout.bind(this);
    this.createNewProject = this.createNewProject.bind(this);
  }

  componentDidMount() {
    console.log("HomeContainer componentDidMount");
  }

  componentDidUpdate() {
    console.log("HomeContainer componentDidUpdate");
  }

  handlePurposeOptionChange(changeEvent) {
    const { setPurpose } = this.props;
    setPurpose(changeEvent.target.value);
    // this.setState({
    //   PURPOSE: changeEvent.target.value
    // });
  }

  handleincomeSourceOptionChange(changeEvent) {
    const { setSourceOfIncome } = this.props;
    setSourceOfIncome(changeEvent.target.value);

    // this.setState({
    //   SOURCE_OF_INCOME: changeEvent.target.value
    // })
  }
  handlerepeatApplyOptionsChange(changeEvent) {
    const { setRepeatApply } = this.props;
    setRepeatApply(changeEvent.target.value);

    // this.setState({
    //   REPEAT_APPLY: changeEvent.target.value
    // })
  }

  btnClickGetDocList() {
    // console.log("btnClickGetDocList");
    // const applicationDetails = {
    //   PURPOSE: this.state.PURPOSE,
    //   AMOUNT: this.state.AMOUNT,
    //   SOURCE_OF_INCOME: this.state.SOURCE_OF_INCOME,
    //   REPEAT_APPLY: this.state.REPEAT_APPLY
    // }
    // console.log("applicationDetails", applicationDetails);
    browserHistory.push({
      pathname: "/showdocs"
    });
  }

  onAmountChange(event) {
    const { setAmount } = this.props;
    setAmount(event.target.value);
  }

  btnClickLogout() {
    console.log("btnClickLogout");
    this.props.logOut();
  }

  createNewProject() {
    browserHistory.push({ pathname: "/newpalletrackproject" });
  }
  render() {
    return (
      <div className={[styles.homeWrapper].join(" ")}>
        <div className="container-fluid row testbg-1 text-center">
          <div className="col-sm-6 center-block container-fluid testbg-2">
            <br />
            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={this.createNewProject}
            >
              Create New
            </Button>
            <br />
            <br />
            <Button bsStyle="info" bsSize="small" onClick={this.viewAll}>
              View All
            </Button>
            <br />
          </div>
          <div className="col-sm-6 container-fluid testbg-2" />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  selectedOptions: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired
  // topics: PropTypes.array.isRequired,
  // typing: PropTypes.func.isRequired,
  // createTopic: PropTypes.func.isRequired,
  // destroyTopic: PropTypes.func.isRequired,
  // incrementCount: PropTypes.func.isRequired,
  // decrementCount: PropTypes.func.isRequired,
  // newTopic: PropTypes.string
};

function mapStateToProps(state) {
  return {
    selectedOptions: state.selectedOptions
    // newTopic: state.topic.newTopic
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(
  mapStateToProps,
  {
    setPurpose,
    setSourceOfIncome,
    setAmount,
    setRepeatApply,
    logOut
  }
)(Home);
