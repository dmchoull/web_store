import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { name, regularPrice, salePrice } from '../../adapters/product';

const Product = ({ attributes }) => (
  <div>
    <span>{name(attributes)}</span>
    <section>
      <span>Reg: {regularPrice(attributes)}</span>
      &nbsp;–&nbsp;
      <span>Cur: {salePrice(attributes)}</span>
    </section>
  </div>
);

Product.propTypes = forbidExtraProps({
  attributes: PropTypes.shape().isRequired,
});

export default Product;
