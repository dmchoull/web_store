import { name, currentPrice, regularPrice, sku } from '../product';

const product = {
  sku: '5577872',
  customerReviews: { averageScore: 4.8, count: 16807 },
  descriptions: { short: 'Wireless. Effortless. Magical.' },
  images: { standard: 'https://img.bbystatic.com/BestBuy_US/images/products/5577/5577872_ra.jpg' },
  names: { title: 'Apple - AirPods - White' },
  prices: { regular: 159.99, current: 139.99 },
  links: {
    product: 'https://api.bestbuy.com/v1/products/5577872.json?apiKey=API_KEY',
    web: 'https://api.bestbuy.com/click/-/5577872/pdp',
    addToCart: 'https://api.bestbuy.com/click/-/5577872/cart',
  },
  rank: 1,
};

describe('product model', () => {
  describe('sku', () => {
    it('returns the product sku', () => {
      expect(sku(product)).toEqual('5577872');
    });
  });

  describe('name', () => {
    it('returns the product name', () => {
      expect(name(product)).toEqual('Apple - AirPods - White');
    });
  });

  describe('currentPrice', () => {
    it('returns the current price', () => {
      expect(currentPrice(product)).toEqual(139.99);
    });
  });

  describe('regularPrice', () => {
    it('returns the regular price', () => {
      expect(regularPrice(product)).toEqual(159.99);
    });
  });
});
