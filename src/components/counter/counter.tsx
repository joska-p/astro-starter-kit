// Counter.js
import { useState } from "react";

/**
 * Counter component that displays a count and allows incrementing/decrementing.
 */
export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button
        className="bg-primary text-primary-foreground hover:bg-primary/80 inline-block px-4 py-2 text-sm font-medium focus:relative"
        onClick={handleIncrement}
      >
        +
      </button>

      <button
        className="bg-primary text-primary-foreground hover:bg-primary/80 inline-block px-4 py-2 text-sm font-medium focus:relative"
        onClick={handleDecrement}
      >
        -
      </button>
    </div>
  );
};
