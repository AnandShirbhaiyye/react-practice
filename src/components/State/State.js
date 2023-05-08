import React from 'react';
import { useState } from 'react';

export default function State() {
    const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}
