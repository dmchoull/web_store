const product = ({ name } = {}) => ({
  sku: Math.floor(Math.random() * 10000).toString(),
  customerReviews: { averageScore: 4.8, count: 17807 },
  descriptions: { short: 'Wireless. Effortless. Magical.' },
  images: { standard: 'https://img.bbystatic.com/BestBuy_US/images/products/5577/5577872_ra.jpg' },
  names: { title: name || 'Apple - AirPods - White' },
  prices: { regular: 159.99, current: 159.99 },
  links: {
    product: 'https://api.bestbuy.com/v1/products/5577872.json?apiKey=API_KEY',
    web: 'https://api.bestbuy.com/click/-/5577872/pdp',
    addToCart: 'https://api.bestbuy.com/click/-/5577872/cart',
  },
  rank: 1,
});

export default { product };
