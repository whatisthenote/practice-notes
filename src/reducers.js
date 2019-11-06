const INITIAL_STATE = {
  news: [],
  loading: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, news: action.payload };
    default:
      return state;
  }
};

export default reducer;
