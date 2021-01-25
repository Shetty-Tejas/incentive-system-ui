/* eslint-disable implicit-arrow-linebreak */
import axios from "axios";
import {
  GET_ERRORS,
  CLEAN_ERRORS,
  LOG_IN_DEALER,
  LOG_IN_MANUFACTURER,
  FETCH_CARS,
  FETCH_DEALS,
  FETCH_APPROVED_DEALS,
  CREATE_DEAL,
  DELETE_DEAL,
  REDEFINE_DEAL
} from "./types";

const BASE_URL = "http://localhost:8080";

export const logIn = (object, mode, history) => async (dispatch) => {
  const { id, pass } = object;
  const dLogin = `${BASE_URL}/dealer/login?dId=${id}&dPass=${pass}`;
  const mLogin = `${BASE_URL}/manufacturer/login?mId=${id}&mPass=${pass}`;
  const dRedirect = "/dealer/createDeals";
  const mRedirect = "/manufacturer/insertCar";
  await axios
    .post(mode === "Dealer" ? dLogin : mLogin)
    .then((res) => {
      history.push(mode === "Dealer" ? dRedirect : mRedirect);
      dispatch({ type: CLEAN_ERRORS });
      return dispatch({
        type: mode === "Dealer" ? LOG_IN_DEALER : LOG_IN_MANUFACTURER,
        payload: res.data
      });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const fetchCars = (object, mode) => async (dispatch) => {
  const id = object;
  const dFetch = `${BASE_URL}/dealer/logged/fetchAllCars?dId=${id}`;
  const mFetch = `${BASE_URL}/manufacturer/logged/fetchAllCars?mId=${id}`;
  await axios
    .get(mode === "dealer" ? dFetch : mFetch)
    .then((res) => {
      dispatch({ type: CLEAN_ERRORS });
      return dispatch({ type: FETCH_CARS, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const fetchDeals = (object, mode) => async (dispatch) => {
  const id = object;
  const dFetch = `${BASE_URL}/dealer/logged/fetchAllDeals?dId=${id}`;
  const mFetch = `${BASE_URL}/manufacturer/logged/fetchAllDeals?mId=${id}`;
  await axios
    .get(mode === "dealer" ? dFetch : mFetch)
    .then((res) => {
      dispatch({ type: CLEAN_ERRORS });
      return dispatch({ type: FETCH_DEALS, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const fetchApproved = (object) => async (dispatch) => {
  const id = object;
  const fetch = `${BASE_URL}/dealer/logged/fetchApprovedDeals?dId=${id}`;
  await axios
    .get(fetch)
    .then((res) => {
      dispatch({ type: CLEAN_ERRORS });
      return dispatch({ type: FETCH_APPROVED_DEALS, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const createDeal = (object, history) => async (dispatch) => {
  const { id, model, incRange } = object;
  const create = `${BASE_URL}/dealer/logged/createDeals?dId=${id}&dealModel=${model}&incentiveRange=${incRange}`;
  await axios
    .post(create)
    .then(() => {
      dispatch({ type: CLEAN_ERRORS });
      history.push("/dealer/fetchAllDeals");
      return dispatch({ type: CREATE_DEAL });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const redefineDeal = (object, history) => async (dispatch) => {
  const { id, model, incRange } = object;
  const redefine = `${BASE_URL}/dealer/logged/redefineDeals?dId=${id}&dealModel=${model}&incentiveRange=${incRange}`;
  await axios
    .post(redefine)
    .then(() => {
      dispatch({ type: CLEAN_ERRORS });
      history.push("/dealer/fetchAllDeals");
      return dispatch({ type: REDEFINE_DEAL });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const deleteDeal = (object, history) => async (dispatch) => {
  const { oId, oModel } = object;
  const deleteUrl = `${BASE_URL}/dealer/logged/deleteDeals?dId=${oId}&dealModel=${oModel}`;
  await axios
    .post(deleteUrl)
    .then(() => {
      dispatch({ type: CLEAN_ERRORS });
      history.push("/dealer/fetchAllDeals");
      return dispatch({ type: DELETE_DEAL });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
