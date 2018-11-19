import React, { Component } from "react";

export default class SortBy extends Component {
  state = {
    TextSortActive: false,
    DateSortActive: false
  };

  showActiveSort = type => {
    let { SORT_TASK_DATE, SORT_TASK_NAME } = this.props;
    if (type === "Date") {
      this.setState(() => ({
        DateSortActive: true,
        TextSortActive: false
      }));
      SORT_TASK_DATE();
    }
    if (type === "Text") {
      this.setState(() => ({
        DateSortActive: false,
        TextSortActive: true
      }));
      SORT_TASK_NAME();
    }
  };

  render() {
    let { DateSortActive, TextSortActive } = this.state;
    return (
      <div className="p-2 ml-auto mt-2">
        Sort by:
        {DateSortActive ? (
          <span>
            <strong> Date </strong>
          </span>
        ) : (
          <span> Date </span>
        )}
        {TextSortActive ? (
          <span>
            <strong> Text </strong>
          </span>
        ) : (
          <span> Text </span>
        )}
        <img
          onClick={() => this.showActiveSort("Date")}
          alt=""
          src={require("../../Assets/Icons/baseline-arrow_drop_down-24px.svg")}
        />
        <img
          onClick={() => this.showActiveSort("Text")}
          alt=""
          src={require("../../Assets/Icons/baseline-arrow_drop_up-24px.svg")}
        />
      </div>
    );
  }
}
