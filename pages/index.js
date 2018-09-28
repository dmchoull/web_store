import React from 'react';
import PropTypes from 'prop-types';
import searchRepo from '../src/repositories/search-repo';
import dealRepo from '../src/repositories/deal-repo';
import NavBar from '../src/ui/components/NavBar';
import DailyDeals from '../src/components/DailyDeals';
import Product from '../src/ui/components/Product';
import { sku } from '../src/adapters/product';

class Index extends React.Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  static getInitialProps = async function getDailyDeals({ req }) {
    const baseUrl = `http://${req.headers.host}`; // TODO: https
    return { products: await dealRepo(baseUrl).get() };
  };

  state = {
    results: [],
  };

  renderContent() {
    const { results } = this.state;

    if (results.length > 0) {
      return <SearchResults results={results} />;
    }

    const { products } = this.props;
    return <DailyDeals products={products} />;
  }

  render() {
    return (
      <div>
        <NavBar />

        <input
          className="search-bar"
          type="search"
          data-testid="search"
          placeholder="What are you looking for?"
          onKeyDown={async e => {
            if (e.key === 'Enter') {
              const results = await searchRepo().get(e.target.value);
              this.setState({ results });
            }
          }}
        />

        <style jsx>{`
          .search-bar {
            -webkit-appearance: none;
            width: 100%;
            border: 1px solid #d3d3d3;
            padding: 12px 12px 12px 50px;
            line-height: 24px;
            font-size: 14px;
          }
        `}</style>

        <div className="content">{this.renderContent()}</div>

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
  }
}

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

export default Index;
