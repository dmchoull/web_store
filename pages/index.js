import React from 'react';
import PropTypes from 'prop-types';
import bestbuy from 'bestbuy';
import NavBar from '../src/components/NavBar';
import Product from '../src/components/Product';
import { sku } from '../src/models/product';

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
  const bby = bestbuy(process.env.BB_API_KEY);
  const data = await bby.products('(offers.type=deal_of_the_day)', {
    pageSize: 15,
    sort: 'bestSellingRank',
    show: 'sku,name,salePrice,regularPrice',
  });

  return {
    products: data.products,
  };
};

export default Index;
