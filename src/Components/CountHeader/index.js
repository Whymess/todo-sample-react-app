import React, { Component } from "react";

export default class CountHeader extends Component {
  countCompletedTasks = () => {
    let { tasks_stack } = this.props;
    let result = tasks_stack.reduce((accumulator, currentValue) => {
      return accumulator + currentValue["complete"];
    }, 0);
    return result;
  };

  render() {
    return (
      <div>
        <img
          className="p-2"
          alt=""
          src={require("../../Assets/Icons/baseline-keyboard_arrow_down-24px.svg")}
        />
        {this.countCompletedTasks()} Completed
      </div>
    );
  }
}
