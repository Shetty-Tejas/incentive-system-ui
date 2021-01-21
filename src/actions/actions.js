import axios from "axios";
import { GET_ERRORS } from "./types";

const BASE_URL = "http://localhost:8080";

export const logIn = (object, mode, history) => async (dispatch) => {
  const { id, pass } = object;
  const dLogin = `${BASE_URL}/dealer/login?dId=${id}&dPass=${pass}`;
  const mLogin = `${BASE_URL}/manufacturer/login?mId=${id}&mPass=${pass}`;
  await axios
    .post(mode === "Dealer" ? dLogin : mLogin)
    .then(() => history.push("/dealer/createDeals"))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
