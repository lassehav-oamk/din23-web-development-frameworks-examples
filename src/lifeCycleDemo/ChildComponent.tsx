import { useEffect } from 'react';

export default function ChildComponent({ number }: { number: number }) {
  useEffect(() => {
    console.log('Child Component: Mounted');

    return () => {
      console.log('Child Component: Unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('Child Component: Updated');
  });

  return <div>Child Component, number received as props: { number }</div>;
};
