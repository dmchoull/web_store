import axios from 'axios';
import searchRepo from '../search-repo';

jest.mock('axios', () => ({
  get: jest.fn(() => ({ data: { products: ['product1', 'product2'] } })),
}));

describe('Search Repo', () => {
  afterEach(() => {
    axios.get.mockClear();
  });

  describe('get', () => {
    it('calls the deals API and returns the deal products', async () => {
      const products = await searchRepo().get('4k tv');

      expect(axios.get).toHaveBeenCalledWith('/api/search?q=4k%20tv');
      expect(products).toEqual(['product1', 'product2']);
    });

    it('returns an empty array for the blank query', async () => {
      const products = await searchRepo().get('');

      expect(axios.get).not.toHaveBeenCalled();
      expect(products).toEqual([]);
    });
  });
});
