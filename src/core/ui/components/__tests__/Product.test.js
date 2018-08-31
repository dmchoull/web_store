import React from 'react';
import { render } from 'react-testing-library';
import generate from 'Test/generate';
import Product from '../Product';

describe('Product', () => {
  it('renders the product attributes', () => {
    const { container } = render(<Product attributes={generate.product()} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
