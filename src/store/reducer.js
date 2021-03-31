import { ACTION_LOGIN, ACTION_LOGOUT, ACTION_RENAME } from "./types";

const reducer = (state = { user: null }, action) => {
  switch (action.type) {
    case ACTION_RENAME: 
      return {
        ...state,
        user: {
          ...state.user,
          name: action.name
        }
      };
    case ACTION_LOGIN:
      return {
        ...state,
        user: action.user
      };
    case ACTION_LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export default reducer;