import { GET_PHOTOS, SET_ALBUMS, SET_FAMILIES, SET_PHOTOS } from '../actions';

const INITIAL_STATE = {
  albums: [],
  families: [],
  photos: [],
  selectedAlbum: '',
};

const contentReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case SET_ALBUMS:
      return {
        ...state,
        albums: payload,
      };

    case SET_FAMILIES:
      return {
        ...state,
        families: payload,
      };

    case GET_PHOTOS:
      return {
        ...state,
        selectedAlbum: payload.name,
      };

    case SET_PHOTOS:
      return {
        ...state,
        photos: payload,
      };

    default:
      return state;
  }
};

export default contentReducer;
