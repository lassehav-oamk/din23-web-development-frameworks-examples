import { render, screen } from '@testing-library/react';

import TestDemoComponent from './TestDemoComponent';

describe('TestDemoComponent', () => {
  test('render test', () => {
    render(<TestDemoComponent message="test" />);

    screen.debug();

    screen.getByText('Hello Testing World! Here is your message: test');    
  });

  test('render with empty props', () => {
    render(<TestDemoComponent message="" />);

    screen.debug();

    screen.getByText('Hello Testing World! Here is your message:');  
  });
});