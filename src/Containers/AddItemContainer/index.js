import { connect } from "react-redux";
import React from "react";
import { bindActionCreators } from "redux";

import { ADD_TASK } from "../../Actions/";

import { AddItem } from "../../Components/";

const AddItemContainer = props => {
  return <AddItem {...props} />;
};

const mapStateToProps = state => {
  return {
    tasks_stack: state.Task.tasks_stack
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ADD_TASK: ADD_TASK
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItemContainer);
