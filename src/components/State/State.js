import React from 'react';
import { useState } from 'react';
import './State.css'

export default function State() {
    const [count, setCount] = useState(0);
  return (
    <>
    <div className='usestate-container'>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    </>
  )
}
