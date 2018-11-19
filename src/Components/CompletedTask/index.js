import React, { Component } from "react";
import "./CompletedTask.css";

export default class CompletedTask extends Component {
  render() {
    let { title, date } = this.props;
    return (
      <span className="done-task d-flex">
        <img
          onClick={this.toogleButton}
          className="p-2"
          alt=""
          src={require("../../Assets/Icons/baseline-check_circle-24px.svg")}
        />
        <span className="p-2"> {title} </span>
        <span className="ml-auto p-2 bd-highlight"> {date} </span>
      </span>
    );
  }
}
