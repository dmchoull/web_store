import { name, salePrice, regularPrice, sku } from '../product';

const product = {
  sku: '5577872',
  name: 'Apple - AirPods - White',
  regularPrice: 159.99,
  salePrice: 139.99,
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

  describe('salePrice', () => {
    it('returns salePrice', () => {
      expect(salePrice(product)).toEqual(139.99);
    });
  });

  describe('regularPrice', () => {
    it('returns the regular price', () => {
      expect(regularPrice(product)).toEqual(159.99);
    });
  });
});
