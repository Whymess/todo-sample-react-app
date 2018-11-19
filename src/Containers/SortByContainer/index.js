import { connect } from "react-redux";
import React from "react";
import { bindActionCreators } from "redux";

import { SortBy } from "../../Components/";

import { SORT_TASK_DATE, SORT_TASK_NAME } from "../../Actions/";

const SortByContainer = props => {
  return <SortBy {...props} />;
};

const mapStateToProps = state => {
  return {
    tasks_stack: state.Task.tasks_stack
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      SORT_TASK_DATE: SORT_TASK_DATE,
      SORT_TASK_NAME: SORT_TASK_NAME
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortByContainer);
