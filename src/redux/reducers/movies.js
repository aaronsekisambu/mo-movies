import {
  GET_MOVIES,
  FAILED_TO_GET_MOVIES,
  GET_MOVIES_WATCHED,
  FAILED_TO_GET_MOVIES_WATCHED
} from "../action-types/index";
import { initialState } from "../store/initialState";

export default (state = initialState.movies, { type, payload }) => {
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload
      };
    case FAILED_TO_GET_MOVIES:
      return {
        ...state,
        error: payload
      };
    case GET_MOVIES_WATCHED:
      return {
        ...state,
        watched: payload
      };
    case FAILED_TO_GET_MOVIES_WATCHED:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
