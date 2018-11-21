import React, { Component } from "react";
import "./AddItem.css";

import { ExpandedAddButton } from "../../Components/";

export default class AddItem extends Component {
  state = {
    renderAddButton: false,
    task: "",
    date: ""
  };

  switchRenderedState = () => {
    let { task, date } = this.state;
    let { ADD_TASK } = this.props;

    this.setState(prevState => ({
      renderAddButton: !prevState.renderAddButton,
      task: "",
      date: ""
    }));

    if (task.length > 0 && date.length > 0) {
      ADD_TASK(task, date);
    }
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    let { renderAddButton } = this.state;

    if (renderAddButton) {
      return (
        <ExpandedAddButton
          handleChange={event => this.handleChange(event)}
          switchRenderedState={() => this.switchRenderedState()}
        />
      );
    }

    if (!renderAddButton) {
      return (
        <div className="add-button mt-3">
          <button
            onClick={this.switchRenderedState}
            type="button"
            className="btn btn-secondary"
          >
            <img
              alt=""
              className="add-image"
              src={require("../../Assets/Icons/baseline-add-24px.svg")}
            />
            New Task
          </button>
        </div>
      );
    }
  }
}
