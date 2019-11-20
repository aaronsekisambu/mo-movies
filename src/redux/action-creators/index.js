import axios from "axios";
import {
  GET_USERS,
  FAILED_TO_GET_USERS,
  LOGIN,
  FAILED_TO_LOGIN,
  GET_MOVIES,
  FAILED_TO_GET_MOVIES,
  GET_MOVIES_WATCHED,
  FAILED_TO_GET_MOVIES_WATCHED
} from "../action-types/index";

export const getUsers = username => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/profile/${username}`;
  try {
    const token = localStorage.getItem("token");
    const users = await axios.get(URL, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    const { data } = users;
    return dispatch({ type: GET_USERS, payload: data });
  } catch (error) {
    const { message } = error;
    return dispatch({ type: FAILED_TO_GET_USERS, payload: message });
  }
};

export const login = ({ email, password }) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/login`;
  try {
    const users = await axios.post(URL, { email, password });
    const { data } = users;
    localStorage.setItem("token", data.token);
    return dispatch({ type: LOGIN, payload: data });
  } catch (error) {
    const { message } = error;
    return dispatch({ type: FAILED_TO_LOGIN, payload: message });
  }
};

export const createUser = ({
  email,
  password,
  lastName,
  firstName,
  accountType,
  username
}) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/signup`;
  const { value } = accountType;
  let roles = value;
  try {
    const users = await axios.post(URL, {
      email,
      password,
      lastName,
      firstName,
      roles,
      username
    });
    const { data } = users;
    return dispatch({ type: LOGIN, payload: data });
  } catch (error) {
    const { message } = error;
    return dispatch({ type: FAILED_TO_LOGIN, payload: message });
  }
};
export const getMovies = username => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/movies/${username}`;
  const token = localStorage.getItem("token");
  try {
    const movies = await axios.get(URL, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    const { data } = movies;
    return dispatch({ type: GET_MOVIES, payload: data });
  } catch (error) {
    const { message } = error;
    return dispatch({ type: FAILED_TO_GET_MOVIES, payload: message });
  }
};

export const getMoviesWatched = username => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/movies/watched/${username}`;
  const token = localStorage.getItem("token");
  try {
    const movies = await axios.get(URL, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    const { data } = movies;
    return dispatch({ type: GET_MOVIES_WATCHED, payload: data });
  } catch (error) {
    const { message } = error;
    return dispatch({ type: FAILED_TO_GET_MOVIES_WATCHED, payload: message });
  }
};
