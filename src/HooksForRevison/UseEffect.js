import { useState, useEffect } from "react";

// useEffect runs on every render.
// That means that when the count changes, a render happens, which then triggers another effect.
// We should always include the second parameter which accepts an array.
// We can optionally pass dependencies to useEffect in this array.
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

export default Timer;
