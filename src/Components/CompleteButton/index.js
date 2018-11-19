import React, { Component } from "react";

export default class CompleteButton extends Component {
  state = {
    complete: false
  };

  toogleButton = () => {
    let { COMPLETE_TASK, id_of_item } = this.props;
    COMPLETE_TASK(id_of_item);
    this.setState(prevState => ({
      complete: !prevState.complete
    }));
  };

  render() {
    let { complete } = this.state;
    return (
      <span className="complete-button">
        {complete ? (
          <img
            onClick={this.toogleButton}
            className="p-2"
            alt=""
            src={require("../../Assets/Icons/baseline-check_circle-24px.svg")}
          />
        ) : (
          <img
            style={{ right: "1em", position: "relative" }}
            onClick={this.toogleButton}
            className="p-2"
            alt=""
            src={require("../../Assets/Icons/cirlce-24px.svg")}
          />
        )}
      </span>
    );
  }
}
