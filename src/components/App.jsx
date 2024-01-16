import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}></button>
      <button onClick={increment}></button>
    </div>
  );
};
