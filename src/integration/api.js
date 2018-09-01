import bestbuy from 'bestbuy';

async function fetchDeals() {
  const bby = bestbuy(process.env.BB_API_KEY);
  const data = await bby.products('(offers.type=deal_of_the_day)', {
    pageSize: 15,
    sort: 'bestSellingRank',
    show: 'sku,name,salePrice,regularPrice',
  });

  return data.products;
}

async function search(query) {
  const expandedQuery = query
    .split(' ')
    .map(keyword => `search=${keyword}`)
    .join('&');

  const bby = bestbuy(process.env.BB_API_KEY);
  const data = await bby.products(`(${expandedQuery})`, {
    show: 'sku,name,salePrice,regularPrice',
  });

  return data.products;
}

export default {
  fetchDeals,
  search,
};
