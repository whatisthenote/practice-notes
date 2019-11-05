import React from "react";
import { connect } from "react-redux";
import { fetchNewsAsync } from "./actions";
import Loading from "./Loading";

function News(props) {
  console.log(props);
  return (
    <div>
      <button onClick={props.fetchNewsAsync}>Click</button>
      {props.news.news.map(item => (
        <div key={item.url}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
      <Loading />
    </div>
  );
}

const mapStateToProps = state => ({
  news: state,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  fetchNewsAsync: () => dispatch(fetchNewsAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
