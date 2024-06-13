import React, { Component } from "react";
import "./index.scss";

export default class Loading extends Component {
  static _ref = null;

  static setRef(ref) {
    Loading._ref = ref;
  }

  static getRef() {
    return Loading._ref;
  }

  static clearRef() {
    Loading._ref = null;
  }

  static show() {
    Loading._ref.show();
  }

  static hide() {
    Loading._ref.hide();
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  show() {
    this.setState({ visible: true });
  }

  hide() {
    setTimeout(() => {
      this.setState({ visible: false });
    }, 1000);
  }
  //*********************** */
  render() {
    const { visible } = this.state;
    return (
      <div
        className="app-spinner-container"
        style={{ display: visible ? "block" : "none" }}
      >
        <div className="app-spinner" role="alert" aria-busy="true">
          <svg className="app-spinner__svg" viewBox="25 25 50 50">
            <circle
              className="app-spinner__circle"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </div>
    );
  }
}
