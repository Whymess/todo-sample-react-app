import { connect } from "react-redux";
import React from "react";
import { bindActionCreators } from "redux";

import { CompleteButton } from "../../Components/";

import { COMPLETE_TASK } from "../../Actions/";

const CompleteButtonContainer = props => {
  return <CompleteButton {...props} />;
};

const mapStateToProps = state => {
  return {
    tasks_stack: state.Task.tasks_stack
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      COMPLETE_TASK: COMPLETE_TASK
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompleteButtonContainer);
