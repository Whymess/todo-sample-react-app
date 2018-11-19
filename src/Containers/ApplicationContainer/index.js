import { connect } from "react-redux";
import React from "react";
import { bindActionCreators } from "redux";

import { Application } from "../../Components/";

const ApplicationContainer = props => {
  return <Application {...props} />;
};

const mapStateToProps = state => {
  return {
    tasks_stack: state.Task.tasks_stack
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationContainer);
