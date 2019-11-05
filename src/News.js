import React from "react";
import { connect } from "react-redux";
import { fetchNewsStart } from "./actions";
import Loading from "./Loading";

function News(props) {
  console.log(props);
  return (
    <div>
      <button onClick={props.fetchNewsStart}>Click</button>
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
  fetchNewsStart: () => dispatch(fetchNewsStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
