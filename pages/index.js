import React from 'react';
import PropTypes from 'prop-types';
import bestbuy from 'bestbuy';
import Product from '../src/components/Product';
import { sku } from '../src/models/product';

const Index = ({ products }) => (
  <div>
    <h2>Top Products</h2>
    <ol>
      {products.map(product => (
        <li key={sku(product)}>
          <Product attributes={product} />
        </li>
      ))}
    </ol>
  </div>
);

Index.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Index.getInitialProps = async function getTrending() {
  const bby = bestbuy(process.env.BB_API_KEY);
  const data = await bby.recommendations('mostViewed', 'abcat0107000');

  return {
    products: data.results,
  };
};

export default Index;
