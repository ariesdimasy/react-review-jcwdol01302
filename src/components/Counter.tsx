import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState<number>(0);

  return (
    <div className="counter">
      <button onClick={() => setNumber(number - 1)}> - </button>
      <div style={{ display: "inline-block" }}>
        <h1>{number}</h1>
      </div>
      <button onClick={() => setNumber(number + 1)}> + </button>
    </div>
  );
}
