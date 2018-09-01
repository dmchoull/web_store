import React from 'react';
import PropTypes from 'prop-types';
import productRepository from '../src/core/repositories/product-repository';
import NavBar from '../src/core/ui/components/NavBar';
import Product from '../src/core/ui/components/Product';
import { sku } from '../src/adapters/product';

const Index = ({ products }) => (
  <div>
    <NavBar />

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

Index.getInitialProps = async function getTrending() {
  const products = await productRepository.fetchDeals();
  return { products };
};

export default Index;
