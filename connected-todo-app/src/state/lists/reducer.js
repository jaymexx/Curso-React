import initialState from "./initialState";
import { CREATE_NEW_LIST } from "./action-creators";

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_LIST: {
      return [
        ...state,
        "New List"
      ]
    }
    default:
      return state;
  }
};