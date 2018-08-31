import bestbuy from 'bestbuy';
import api from '../api';

jest.mock('bestbuy');

describe('api', () => {
  describe('fetchDeals', () => {
    it('returns the top deals', async () => {
      const products = await api.fetchDeals();

      expect(bestbuy().products).toHaveBeenCalledWith('(offers.type=deal_of_the_day)', {
        pageSize: 15,
        show: 'sku,name,salePrice,regularPrice',
        sort: 'bestSellingRank',
      });

      expect(products).toHaveLength(2);
    });
  });
});
