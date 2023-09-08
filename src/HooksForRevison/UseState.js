import React from "react";
import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Inc </button>
        <button onClick={() => setCount(count - 1)}>Dec </button>
      </div>
    </div>
  );
};

export default Example;
