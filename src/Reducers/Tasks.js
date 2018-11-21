import uuidv4 from "uuid/v4";
import { compare, compareDates } from "../Helpers/";
import {
  COMPLETE_TASK,
  SORT_TASK_DATE,
  SORT_TASK_NAME,
  ADD_TASK
} from "../Constants/";

let inital_todo_state = {
  tasks_stack: []
};

export default (state = inital_todo_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case COMPLETE_TASK:
      let copyOfStateHandler = [...state.tasks_stack];

      let result = copyOfStateHandler.map((el, i) => {
        if (el["id"] === payload) {
          el["complete"] = !el["complete"];
        }
        return el;
      });

      return {
        ...state,
        tasks_stack: result
      };

    case SORT_TASK_DATE:
      copyOfStateHandler = [...state.tasks_stack];

      result = copyOfStateHandler.sort(compareDates);

      return {
        ...state,
        tasks_stack: result
      };

    case SORT_TASK_NAME:
      copyOfStateHandler = [...state.tasks_stack];

      result = copyOfStateHandler.sort(compare);

      return {
        ...state,
        tasks_stack: result
      };

    case ADD_TASK:
      return {
        ...state,
        tasks_stack: [
          ...state.tasks_stack,
          {
            title: payload[0],
            date: payload[1],
            complete: false,
            id: uuidv4()
          }
        ]
      };
    default:
      return state;
  }
};
