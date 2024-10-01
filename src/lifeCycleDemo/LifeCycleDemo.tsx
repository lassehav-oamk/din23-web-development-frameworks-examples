import { useEffect, useState } from 'react';
import ChildComponent from './ChildComponent'

export default function LifeCycleDemo() {
  const [showChild, setShowChild] = useState(false);
  const [counter, setCounter] = useState(0);

  // Lifecycle demo for Parent Component
  useEffect(() => {
    console.log('Parent Component: Mounted');

    return () => {
      console.log('Parent Component: Unmounted');
    };
  }, []); // this empty array is important to run the effect only once on mount

  useEffect(() => {
    console.log('Parent Component: Updated');
  }); // this effect runs on every update, also on the initial render (mount)

  return (
    <div>
      <h1>React Functional Component Lifecycle Demo</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Update Parent (Counter: {counter})
      </button>
      <button onClick={() => {
        console.log('button clicked');
        setShowChild(!showChild)
      }}>
        {showChild ? 'Remove Child Component' : 'Add Child Component'}
      </button>

      {showChild && <ChildComponent number={ counter }/>}
    </div>
  );
}

