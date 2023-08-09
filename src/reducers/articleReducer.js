import { SET_LOADING_STATUS, GET_ARTICLES } from "../actions/actionType";

export const initState = {
  loading: false,
  articles: [],
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
  }
};

export default articleReducer;
