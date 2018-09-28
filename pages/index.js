import React from 'react';
import PropTypes from 'prop-types';
import dealRepo from '../src/repositories/deal-repo';
import NavBar from '../src/ui/components/NavBar';
import Product from '../src/ui/components/Product';
import { sku } from '../src/adapters/product';

const Index = ({ products }) => (
  <div>
    <NavBar />

    <div className="content">
      <DailyDeals products={products} />
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
  const baseUrl = `http://${req.headers.host}`; // TODO: https
  return { products: await dealRepo(baseUrl).get() };
};

const DailyDeals = ({ products }) => (
  <React.Fragment>
    <h2>Daily Deals</h2>
    <ol>
      {products.map(product => (
        <li key={sku(product)}>
          <Product attributes={product} />
        </li>
      ))}
    </ol>
  </React.Fragment>
);

DailyDeals.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Index;
