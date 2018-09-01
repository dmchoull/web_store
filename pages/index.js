import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import NavBar from '../src/ui/components/NavBar';
import Product from '../src/ui/components/Product';
import { sku } from '../src/adapters/product';

// if (process.env.BASE_URL) {
//   axios.defaults.baseURL = process.env.BASE_URL;
// }

async function search(query) {
  const res = await axios.get(`/api/search?q=${query}`);
  console.log(res.data.products);
  return res.data.products;
}

const Index = ({ products }) => (
  <div>
    <NavBar />

    <input
      type="search"
      onKeyDown={e => {
        if (e.key === 'Enter') {
          search(e.target.value);
        }
      }}
    />

    <div className="content">
      <h2>Daily Deals</h2>
      <ol>
        {products.map(product => (
          <li key={sku(product)}>
            <Product attributes={product} />
          </li>
        ))}
      </ol>
    </div>

    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #212121;
        font-family: 'Helvetica Neue', 'Calibri Light', Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        letter-spacing: 0.02em;
      }
    `}</style>

    <style jsx>{`
      .content {
        padding: 0 50px;
      }
    `}</style>
  </div>
);

Index.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Index.getInitialProps = async function getDailyDeals({ req }) {
  const baseUrl = `http://${req.headers.host}`;
  const res = await axios.get(`${baseUrl}/api/deals`, { credentials: 'same-origin' });
  return { products: res.data.products };
};

export default Index;
