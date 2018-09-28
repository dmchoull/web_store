import axios from 'axios';
import dealRepo from '../deal-repo';

jest.mock('axios', () => ({
  get: jest.fn(() => ({ data: { products: ['product1', 'product2'] } })),
}));

describe('Deal Repo', () => {
  describe('get', () => {
    it('calls the deals API and returns the deal products', async () => {
      const products = await dealRepo('http://host:3030').get();

      expect(axios.get).toHaveBeenCalledWith('http://host:3030/api/deals');
      expect(products).toEqual(['product1', 'product2']);
    });
  });
});
