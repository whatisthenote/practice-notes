import React from "react";
import { connect } from "react-redux";

function Loading(props) {
  return <div>{props.loading ? <p>Loading</p> : null}</div>;
}

const mapStateToProps = state => ({
  loading: state.loading
});

export default connect(mapStateToProps)(Loading);
