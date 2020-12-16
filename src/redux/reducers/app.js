import { APP_LOADING } from '../actions';

const INITIAL_STATE = {
  loading: false,
};

const appReducer = (state=INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case APP_LOADING:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
};

export default appReducer;
