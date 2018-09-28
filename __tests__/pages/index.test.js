import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import generate from 'Test/generate';
import dealRepo from '../../src/repositories/deal-repo';
import Index from '../../pages/index';

jest.mock('../../src/repositories/deal-repo', () => jest.fn(() => ({ get: async () => ['product1', 'product2'] })));

describe('Index', () => {
  const product1 = generate.product({ name: 'Product 1' });
  const product2 = generate.product({ name: 'Product 2' });

  it('renders the daily deal products', () => {
    const { container } = render(<Index products={[product1, product2]} />);
    expect(container).toHaveTextContent('Daily Deals');
    expect(container).toHaveTextContent('Product 1');
    expect(container).toHaveTextContent('Product 2');
  });

  describe('getInitialProps', () => {
    it('calls the fetchDeals api and returns products', async () => {
      const req = {
        headers: {
          host: 'localhost:3000',
        },
      };
      const { products } = await Index.getInitialProps({ req });
      expect(dealRepo).toHaveBeenCalledWith('http://localhost:3000');
      expect(products).toEqual(['product1', 'product2']);
    });
  });
});
