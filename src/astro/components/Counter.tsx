import { useState } from "react";

export default function Hello() {
  const [count, setCounter] = useState(0);

  return (
    <div>
      <title>Counter</title>
      <div>{count}</div>
      <div>
        <button onClick={() => setCounter(count + 1)}>Increment</button>
      </div>
    </div>
  );
}
