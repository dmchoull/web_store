// eslint-disable-next-line no-shadow
const sku = ({ sku }) => sku;

const name = ({ names }) => names.title;

const currentPrice = ({ prices }) => prices.current;

const regularPrice = ({ prices }) => prices.regular;

export { name, sku, currentPrice, regularPrice };
