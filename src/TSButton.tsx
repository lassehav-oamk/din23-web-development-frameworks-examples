import React, { useState } from 'react';

type ButtonProps = {
  label: string;
};

export default function Button({ label }: ButtonProps) {
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {label} - Clicked {count} times
    </button>
  );
};
