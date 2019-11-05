export const fetchNewsStart = () => ({
  type: "FETCH_NEWS_START"
});

export const fetchNewsSuccess = news => ({
  type: "FETCH_NEWS_SUCCESS",
  payload: news.articles
});

export const fetchNewsAsync = () => dispatch => {
  dispatch(fetchNewsStart());
  fetch(
    "https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc"
  )
    .then(res => res.json())
    .then(items => dispatch(fetchNewsSuccess(items)));
};
