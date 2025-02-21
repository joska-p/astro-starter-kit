import { useState } from "react";
import { Button } from "@components/ui/button/Button";

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
      <span className="flex gap-2">
        <Button onClick={handleIncrement} className="text-lg">
          +
        </Button>
        <Button onClick={handleDecrement} className="text-lg">
          -
        </Button>
      </span>
    </div>
  );
};
