'use client';

import { useState } from 'react';
import {css} from "@emotion/css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((c) => c + 1);

  return (
    <section >
      <div>Count: {count}</div>
      <button
        onClick={handleIncrement}
      >
        Increment
      </button>
    </section>
  );
};
