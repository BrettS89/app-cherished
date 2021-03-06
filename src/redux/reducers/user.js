import { SET_FAMILY, SET_USER_DATA } from "../actions";

const INITIAL_STATE = {
  user: {},
  family: {},
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: payload,
      };

    case SET_FAMILY:
      return {
        ...state,
        family: payload,
      }

    default:
      return state;
  }
};

export default userReducer;
