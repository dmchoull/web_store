import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import generate from '../../test/generate';
import Index from '../../pages/index';

describe('Index', () => {
  it('renders', () => {
    const product1 = generate.product({ name: 'Product 1' });
    const product2 = generate.product({ name: 'Product 2' });

    const { container } = render(<Index products={[product1, product2]} />);
    expect(container).toHaveTextContent('Top Products');
    expect(container).toHaveTextContent('Product 1');
    expect(container).toHaveTextContent('Product 2');
  });
});
