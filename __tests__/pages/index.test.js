import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import generate from '../../test/generate';
import Index from '../../pages/index';

jest.mock('../../src/integration/api', () => ({
  fetchDeals: async () => ['product1', 'product2'],
}));

describe('Index', () => {
  it('renders products', () => {
    const product1 = generate.product({ name: 'Product 1' });
    const product2 = generate.product({ name: 'Product 2' });

    const { container } = render(<Index products={[product1, product2]} />);
    expect(container).toHaveTextContent('Daily Deals');
    expect(container).toHaveTextContent('Product 1');
    expect(container).toHaveTextContent('Product 2');
  });

  describe('getInitialProps', () => {
    it('calls the fetchDeals api and returns products', async () => {
      const { products } = await Index.getInitialProps();
      expect(products).toEqual(['product1', 'product2']);
    });
  });
});
