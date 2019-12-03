import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      name
      currency
      rate
    }
  }
`;

const ExchangeRates = () => (
  <Query query={EXCHANGE_RATES}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ name, currency, rate }) => (
        <div key={currency}>
          <p>{name}</p>
          <p>{currency}</p>
          <p>{rate}</p>
          <hr />
        </div>
      ));
    }}
  </Query>
);

export default ExchangeRates;
