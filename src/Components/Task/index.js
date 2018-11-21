import React, { Component } from "react";
import "./Task.css";
import { CompleteButtonContainer } from "../../Containers/";

export default class Task extends Component {
  render() {
    let { title, date, id } = this.props;
    return (
      <div className="Task d-flex mt-2">
         <img
            className="p-2"
            alt=""
            src={require("../../Assets/Icons/baseline-drag_indicator-24px.svg")}
          />
        <CompleteButtonContainer id_of_item={id} />
        <span className="p-2"> {title} </span>
        <span className="ml-auto p-2 bd-highlight"> {date} </span>
      </div>
    );
  }
}
