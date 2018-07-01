const product = ({ name } = {}) => ({
  sku: Math.floor(Math.random() * 10000).toString(),
  name: name || 'Apple - AirPods - White',
  regularPrice: 159.99,
  salePrice: 159.99,
});

export default { product };
