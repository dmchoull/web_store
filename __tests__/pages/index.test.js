import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import axios from 'axios';
import generate from '../../test/generate';
import Index from '../../pages/index';

jest.mock('axios', () => ({
  defaults: {},
  get: jest.fn(() => ({ data: { products: ['product1', 'product2'] } })),
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
      const req = {
        headers: {
          host: 'localhost:3000',
        },
      };
      const { products } = await Index.getInitialProps({ req });
      expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/api/deals', { credentials: 'same-origin' });
      expect(products).toEqual(['product1', 'product2']);
    });
  });
});
