export const COMPLETE_TASK = payload => {
  return {
    type: "COMPLETE_TASK",
    payload
  };
};

export const ADD_TASK = (task, date) => {
  return {
    type: "ADD_TASK",
    payload: [task, date]
  };
};

export const SORT_TASK_DATE = () => {
  return {
    type: "SORT_TASK_DATE"
  };
};

export const SORT_TASK_NAME = () => {
  return {
    type: "SORT_TASK_NAME"
  };
};
