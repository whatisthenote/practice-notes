import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import ExchangeRates from "./ExchangeRates";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

render(
  <ApolloProvider client={client}>
    <ExchangeRates />
  </ApolloProvider>,
  document.getElementById("root")
);
