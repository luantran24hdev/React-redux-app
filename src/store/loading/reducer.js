import { SHOW_LOADING, HIDE_LOADING } from "./action";
const initState = {
  isLoading: false,
};
export default function loadingReducer(state = initState, action) {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case HIDE_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
