import React, { Component } from "react";
import "./Application.css";
import { Title, Task, CompletedTask, CountHeader } from "../../Components/";

import { SortByContainer, AddItemContainer } from "../../Containers/";

export default class Application extends Component {
  renderCurrentItems = () => {
    let { tasks_stack } = this.props;
    return tasks_stack.map((el, i) => {
      return (
        <div key={i} className="task-list">
          <Task key={i} {...el} />
        </div>
      );
    });
  };

  renderCompletedItems = () => {
    let { tasks_stack } = this.props;
    return tasks_stack.map((el, i) => {
      if (el["complete"] === true) {
        return (
          <div key={i} className="task-list">
            <CompletedTask key={i} {...el} />
          </div>
        );
      }
      return null;
    });
  };

  render() {
    let { tasks_stack } = this.props;
    return (
      <div className="App">
        <div className="card">
          <div className="card-body">
            <div className="header">
              <Title title="To Do List" />
              <SortByContainer />
            </div>
            {this.renderCurrentItems()}
            <div className="container mt-5">
              <div className="container-for-count mt-2">
                <CountHeader tasks_stack={tasks_stack} />
              </div>
              <div className="completed-list mt-4">
                {this.renderCompletedItems()}
              </div>
              <AddItemContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
