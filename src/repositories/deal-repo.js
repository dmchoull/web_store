import axios from 'axios';

async function get(baseUrl) {
  const res = await axios.get(`${baseUrl}/api/deals`);
  return res.data.products;
}

export default baseUrl => ({
  get: () => get(baseUrl),
});
