import { useState, useEffect, useRef } from "react";

// to count render if we use useState then it may goes to infinte loop
// as useState also render the page again
// the solution is to use useRef
// it counts but do not  render the page for counting

function UseRefExample() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default UseRefExample;
