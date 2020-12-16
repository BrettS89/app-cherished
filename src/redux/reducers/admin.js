import { SET_FAMILY, SET_ALBUM, TOGGLE_CREATE_ALBUM_MODAL } from '../actions';

const INITIAL_STATE = {
  selectedFamily: null,
  selectedAlbum: null,
  createAlbumModalOpen: false,
};

const adminReducer = (state=INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case SET_FAMILY:
      return {
        ...state,
        selectedFamily: payload,
      };

    case SET_ALBUM:
      return {
        ...state,
        selectedAlbum: payload
      };

    case TOGGLE_CREATE_ALBUM_MODAL:
      return {
        ...state,
        createAlbumModalOpen: !state.createAlbumModalOpen,
      };

    default:
      return state;
  }
};

export default adminReducer;
