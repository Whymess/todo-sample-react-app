import React, { Component } from "react";
import "./ExpandedAddButton.css";
import TextField from "@material-ui/core/TextField";

export default class ExpandedAddButton extends Component {
  render() {
    let { handleChange, switchRenderedState } = this.props;
    return (
      <div className="add-button-rendered mt-3">
        <TextField
          onChange={handleChange}
          name="task"
          label="New Task"
          placeholder="New Task"
          inputProps={{
            maxLength: 10
          }}
        />

        <TextField
          onChange={handleChange}
          placeholder="Due By:"
          name="date"
          type="date"
        />
        <button
          type="button"
          onClick={switchRenderedState}
          className="btn btn-light"
        >
          Add
        </button>
        <div style={{textAlign: 'center', color: 'firebrick'}}> All fields are required </div>
      </div>
    );
  }
}
