import { useState, useCallback } from 'react';

export function Counter(props) {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(
    () => setCounter((prevVal) => prevVal + 1),
    [setCounter]
  );

  const handleDecrement = useCallback(
    () => setCounter((prevVal) => prevVal - 1),
    [setCounter]
  );

  return (
    <div>
      <div>
        { counter }
      </div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};