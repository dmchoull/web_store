import api from '../../../integration/api';
import productsRepository from '../product-repository';

jest.mock('../../../integration/api', () => ({
  search: jest.fn(async () => ['product1', 'product2']),
  fetchDeals: jest.fn(async () => ['product1', 'product2']),
}));

describe('product repository', () => {
  describe('search', () => {
    it('uses the search api to find products', async () => {
      const products = await productsRepository.search('wireless mouse');

      expect(api.search).toHaveBeenCalledWith('wireless mouse');
      expect(products).toEqual(['product1', 'product2']);
    });
  });

  describe('fetchDeals', () => {
    it('uses the fetchDeals api to find deal products', async () => {
      const products = await productsRepository.fetchDeals();

      expect(api.fetchDeals).toHaveBeenCalled();
      expect(products).toEqual(['product1', 'product2']);
    });
  });
});
