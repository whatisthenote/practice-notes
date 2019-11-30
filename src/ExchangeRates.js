import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
      name
    }
  }
`;

export default function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <div>
      {data.rates.map(({ currency, rate, name }) => (
        <div key={currency}>
          <p>{name}</p>
          <p>{currency}</p>
          <p>{rate}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
