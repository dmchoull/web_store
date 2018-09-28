import React from 'react';
import PropTypes from 'prop-types';
import { sku } from '../adapters/product';
import Product from '../ui/components/Product';

const DailyDeals = ({ products }) => (
  <>
    <h2>Daily Deals</h2>
    <ol>
      {products.map(product => (
        <li key={sku(product)}>
          <Product attributes={product}/>
        </li>
      ))}
    </ol>
  </>
);

DailyDeals.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DailyDeals
