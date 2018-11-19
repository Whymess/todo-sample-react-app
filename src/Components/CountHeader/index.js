import React, { Component } from "react";

export default class CountHeader extends Component {
  
  countCompletedTasks = () => {
    let { tasks_stack } = this.props;
    var result = tasks_stack.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue["complete"];
    }, 0);
    return result;
  };

  render() {
    return <div>{this.countCompletedTasks()} Completed</div>;
  }
}
