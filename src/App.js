import React, { useEffect } from "react";
import { addCollection } from "./firebase";

export default function App() {
  var arr = [
    {
      a: 1,
      b: [
        { a: 1, b: 2 },
        { a: 1, b: 2 },
        { a: 1, b: 2 },
        { a: 1, b: 2 },
        { a: 1, b: 2 },
        { a: 1, b: 2 },
        { a: 1, b: 2 }
      ]
    },
    { a: 1, b: 2 },
    { a: 1, b: 2 },
    { a: 1, b: 2 }
  ];

  useEffect(() => {
    addCollection("arr", arr);
  }, [arr]);

  return <div>{console.log()}</div>;
}
