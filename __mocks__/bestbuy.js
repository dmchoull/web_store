/* eslint-disable compat/compat */
import generate from '../test/generate';

const product1 = generate.product({ name: 'Product 1' });
const product2 = generate.product({ name: 'Product 2' });

const bby = {
  products: jest.fn(() => Promise.resolve({ products: [product1, product2] })),
};

const bestbuy = jest.fn(() => bby);

module.exports = bestbuy;
