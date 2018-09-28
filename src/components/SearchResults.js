import React from 'react';
import PropTypes from 'prop-types';
import { sku } from '../adapters/product';
import Product from '../ui/components/Product';

const SearchResults = ({ results }) => (
  <>
    <h2>{results.length} Results</h2>
    <ol>
      {results.map(result => (
        <li key={sku(result)}>
          <Product attributes={result} />
        </li>
      ))}
    </ol>
  </>
);

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResults;
