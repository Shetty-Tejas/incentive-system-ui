import { GET_ERRORS, CLEAN_ERRORS } from "../actions/types";

const initialState = { error: "" };

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return { error: action.payload };
    case CLEAN_ERRORS:
      return { error: "" };
    default:
      return state;
  }
};

export default errorReducer;
