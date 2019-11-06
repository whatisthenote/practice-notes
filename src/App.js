import React from "react";
import { connect } from "react-redux";
import { fetchStart } from "./actions";

function App(props) {
  console.log(props.loading);
  return (
    <div>
      <button onClick={props.fetchStart}>Click</button>
      <div>{props.loading ? <p>Loading</p> : null}</div>
      {props.news.map(item => (
        <div key={item.url}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.url}
          </a>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  news: state.news,
  loading: state.loading
});

const mapDispatchToProps = {
  fetchStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
