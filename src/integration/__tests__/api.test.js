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

  describe('search', () => {
    it('returns the query results for a single keyword', async () => {
      const products = await api.search('bluetooth');

      expect(bestbuy().products).toHaveBeenCalledWith('(search=bluetooth)', {
        show: 'sku,name,salePrice,regularPrice',
      });

      expect(products).toHaveLength(2);
    });

    it('returns the query results for multiple keywords', async () => {
      const products = await api.search('bluetooth speaker');

      expect(bestbuy().products).toHaveBeenCalledWith('(search=bluetooth&search=speaker)', {
        show: 'sku,name,salePrice,regularPrice',
      });

      expect(products).toHaveLength(2);
    });
  });
});
