import React from 'react';
import { render, fireEvent, waitForElement, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import generate from 'Test/generate';
import dealRepo from '../../src/repositories/deal-repo';
import Index from '../../pages/index';

jest.mock('../../src/repositories/deal-repo', () => jest.fn(() => ({ get: async () => ['product1', 'product2'] })));

jest.mock('../../src/repositories/search-repo', () =>
  jest.fn(() => ({
    get: async () => [{ name: 'Product 3', sku: '3' }, { name: 'Product 4', sku: '4' }],
  }))
);

afterEach(cleanup);

describe('Index', () => {
  const product1 = generate.product({ name: 'Product 1' });
  const product2 = generate.product({ name: 'Product 2' });

  it('renders the daily deal products', () => {
    const { container } = render(<Index products={[product1, product2]} />);

    expect(container).toHaveTextContent('Daily Deals');
    expect(container).toHaveTextContent('Product 1');
    expect(container).toHaveTextContent('Product 2');
  });

  it('renders the search results', async () => {
    const { getByTestId, getByText, queryByText } = render(<Index products={[product1, product2]} />);

    const searchInput = getByTestId('search');
    searchInput.value = '4k tv';
    fireEvent.keyDown(searchInput, { key: 'Enter', keyCode: 13, which: 13 });

    await waitForElement(() => getByText('2 Results'));

    expect(getByText('2 Results')).toBeInTheDocument();
    expect(queryByText('Product 1')).not.toBeInTheDocument();
    expect(queryByText('Product 2')).not.toBeInTheDocument();
    expect(getByText('Product 3')).toBeInTheDocument();
    expect(getByText('Product 4')).toBeInTheDocument();
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
