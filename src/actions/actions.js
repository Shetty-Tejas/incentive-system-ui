/* eslint-disable function-paren-newline */
/* eslint-disable no-alert */
/* eslint-disable no-console */
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
  REDEFINE_DEAL,
  RECORD_INCENTIVE,
  FETCH_INCENTIVE,
  INSERT_CAR,
  ALTER_STATUS,
  FETCH_PROFILE,
  FETCH_CUSTOMERS,
  REGISTER,
  LOGOUT
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

export const register = (object, mode, history) => async (dispatch) => {
  const { name, contact, pass } = object;
  const dRegister = `${BASE_URL}/dealer/register?dName=${name}&dContact=${contact}&dPass=${pass}`;
  const mRegister = `${BASE_URL}/manufacturer/register?mName=${name}i&mEmail=${contact}&mPass=${pass}`;
  const dRedirect = "/dealerSignIn";
  const mRedirect = "/manufacturerSignIn";
  await axios
    .post(mode === "Dealer" ? dRegister : mRegister)
    .then((res) => {
      history.push(mode === "Dealer" ? dRedirect : mRedirect);
      dispatch({ type: CLEAN_ERRORS });
      alert(
        `Your User-Id is ${
          mode === "Dealer" ? res.data.dealerId : res.data.manufacturerId
        }! Please use this id at the sign-in page!`
      );
      history.push(mode === "Dealer" ? dRedirect : mRedirect);
      dispatch({ type: REGISTER });
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
      dispatch({ type: FETCH_DEALS, payload: res.data });
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

export const deleteDeal = (object, callback) => async (dispatch) => {
  const { oId, oModel } = object;
  const deleteUrl = `${BASE_URL}/dealer/logged/deleteDeals?dId=${oId}&dealModel=${oModel}`;
  await axios
    .post(deleteUrl)
    .then(() => {
      dispatch({ type: CLEAN_ERRORS });
      return dispatch({ type: DELETE_DEAL });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
  return callback();
};

export const alterDeal = (object, callback) => async (dispatch) => {
  const { id, model, bool } = object;
  const alterUrl = `${BASE_URL}/manufacturer/logged/alterStatus?mId=${id}&carModel=${model}&flag=${bool}`;
  await axios
    .post(alterUrl)
    .then(() => {
      dispatch({ type: CLEAN_ERRORS });
      return dispatch({ type: ALTER_STATUS });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
  return callback();
};

export const recordIncentive = (object, history) => async (dispatch) => {
  const { id, number, name, date, model } = object;
  const recordInc = `${BASE_URL}/dealer/logged/recordIncentive?dId=${id}&contactNo=${number}&custName=${name}&date=${date}&model=${model}`;
  await axios
    .post(recordInc)
    .then(() => {
      dispatch({ type: CLEAN_ERRORS });
      history.push("/dealer/fetchIncentiveRecords");
      return dispatch({ type: RECORD_INCENTIVE });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const fetchIncentives = (object) => async (dispatch) => {
  const id = object;
  const fetchInc = `${BASE_URL}/dealer/logged/fetchIncentiveRecords?dId=${id}`;
  await axios
    .get(fetchInc)
    .then((res) => {
      dispatch({ type: CLEAN_ERRORS });
      return dispatch({ type: FETCH_INCENTIVE, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const insertCar = (object, history) => async (dispatch) => {
  const { id, carModel, carBasePrice, carMsp } = object;
  const insertCarUrl = `${BASE_URL}/manufacturer/logged/insertCar?mId=${id}&carModel=${carModel}&carBasePrice=${carBasePrice}&carMsp=${carMsp}`;
  await axios
    .post(insertCarUrl)
    .then(() => {
      dispatch({ type: CLEAN_ERRORS });
      history.push("/manufacturer/fetchAllCars");
      return dispatch({ type: INSERT_CAR });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const fetchProfile = (object, mode) => async (dispatch) => {
  const id = object;
  const dFetch = `${BASE_URL}/dealer/logged/getProfile?dId=${id}`;
  const mFetch = `${BASE_URL}/manufacturer/logged/getProfile?mId=${id}`;
  await axios
    .get(mode === "dealer" ? dFetch : mFetch)
    .then((res) => {
      dispatch({ type: CLEAN_ERRORS });
      return dispatch({ type: FETCH_PROFILE, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const fetchCustomer = (object) => async (dispatch) => {
  const id = object;
  const fetch = `${BASE_URL}/dealer/logged/fetchCustomerById?dId=${id}`;
  await axios
    .get(fetch)
    .then((res) => {
      dispatch({ type: CLEAN_ERRORS });
      return dispatch({ type: FETCH_CUSTOMERS, payload: res.data });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const logOut = (history) => (dispatch) => {
  dispatch({ type: LOGOUT });
  history.push("/");
};
