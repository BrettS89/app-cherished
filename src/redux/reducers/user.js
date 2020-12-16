import { SET_USER_DATA } from "../actions";

const INITIAL_STATE = {
  user: {},
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
