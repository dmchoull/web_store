import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import Index from '../../pages/index';

describe('Index', () => {
  it('renders', () => {
    const { container } = render(<Index />);
    expect(container).toHaveTextContent('Hello, world!');
  });
});
