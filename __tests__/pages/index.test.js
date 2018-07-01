import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import bestbuy from 'bestbuy';
import generate from '../../test/generate';
import Index from '../../pages/index';

jest.mock('bestbuy');

describe('Index', () => {
  it('renders', () => {
    const product1 = generate.product({ name: 'Product 1' });
    const product2 = generate.product({ name: 'Product 2' });

    const { container } = render(<Index products={[product1, product2]} />);
    expect(container).toHaveTextContent('Daily Deals');
    expect(container).toHaveTextContent('Product 1');
    expect(container).toHaveTextContent('Product 2');
  });

  describe('getInitialProps', () => {
    it('returns best buy daily deals', async () => {
      const { products } = await Index.getInitialProps();

      expect(bestbuy().products).toHaveBeenCalledWith('(offers.type=deal_of_the_day)', {
        pageSize: 15,
        show: 'sku,name,salePrice,regularPrice',
        sort: 'bestSellingRank',
      });

      expect(products).toHaveLength(2);
    });
  });
});
