import axios from 'axios';

async function search(query) {
  if (query === '') return [];

  const res = await axios.get(`/api/search?q=${encodeURIComponent(query)}`);
  return res.data.products;
}

export default () => ({
  get: search,
});
