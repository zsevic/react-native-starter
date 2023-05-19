import {INITIALIZE_STORE} from './constants';

export const initialState = {};

export const appReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE_STORE: {
      return action.payload;
    }
    default:
      return state;
  }
};
