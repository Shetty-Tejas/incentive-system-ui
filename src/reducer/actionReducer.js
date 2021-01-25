import {
  LOG_IN_DEALER,
  LOG_IN_MANUFACTURER,
  FETCH_CARS,
  FETCH_DEALS,
  FETCH_APPROVED_DEALS,
  FETCH_REJECTED_DEALS,
  CREATE_DEAL,
  REDEFINE_DEAL
} from "../actions/types";

const initialState = {};

const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_DEALER:
      return { ...state, loggedInMode: "dealer", loggedId: action.payload };
    case LOG_IN_MANUFACTURER:
      return {
        ...state,
        loggedInMode: "manufacturer",
        loggedId: action.payload
      };
    case FETCH_CARS:
      return { ...state, cars: [...action.payload] };
    case FETCH_DEALS:
      return { ...state, deals: [...action.payload] };
    case FETCH_APPROVED_DEALS:
      return { ...state, appDeals: [...action.payload] };
    case FETCH_REJECTED_DEALS:
      return { ...state, rejDeals: [...action.payload] };
    case CREATE_DEAL:
      return { ...state };
    case REDEFINE_DEAL:
      return { ...state };
    default:
      return { ...state };
  }
};

export default actionReducer;
