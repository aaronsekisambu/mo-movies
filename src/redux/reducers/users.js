import {
  GET_USERS,
  FAILED_TO_GET_USERS,
  LOGIN,
  FAILED_TO_LOGIN
} from "../action-types/index";
import { initialState } from "../store/initialState";

export default (state = initialState.users, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload
      };
    case FAILED_TO_GET_USERS:
      return {
        ...state,
        error: payload
      };
    case LOGIN:
      return {
        ...state,
        users: payload
      };
    case FAILED_TO_LOGIN:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
