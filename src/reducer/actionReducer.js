import {
  REGISTER,
  LOG_IN_DEALER,
  LOG_IN_MANUFACTURER,
  FETCH_CARS,
  FETCH_DEALS,
  FETCH_APPROVED_DEALS,
  FETCH_REJECTED_DEALS,
  CREATE_DEAL,
  REDEFINE_DEAL,
  DELETE_DEAL,
  RECORD_INCENTIVE,
  FETCH_INCENTIVE,
  INSERT_CAR,
  ALTER_STATUS,
  FETCH_PROFILE,
  FETCH_CUSTOMERS,
  LOGOUT
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
    case DELETE_DEAL:
      return { ...state };
    case RECORD_INCENTIVE:
      return { ...state };
    case FETCH_INCENTIVE:
      return { ...state, incentives: [...action.payload] };
    case INSERT_CAR:
      return { ...state };
    case ALTER_STATUS:
      return { ...state };
    case FETCH_PROFILE:
      return { ...state, userObj: action.payload };
    case FETCH_CUSTOMERS:
      return { ...state, customers: action.payload };
    case REGISTER:
      return { ...state };
    case LOGOUT:
      return {};
    default:
      return { ...state };
  }
};

export default actionReducer;
