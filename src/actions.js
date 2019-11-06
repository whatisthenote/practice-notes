export const fetchStart = () => ({
  type: "FETCH_START"
});

export const fetchSuccess = news => ({
  type: "FETCH_SUCCESS",
  payload: news.articles
});
