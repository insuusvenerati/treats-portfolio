import React from 'react';
import Layout from '../components/Layout';
import Masonry from 'react-masonry-component';
import Helmet from 'react-helmet';

const Shop = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <script type="text/javascript" src="https://gumroad.com/js/gumroad.js"></script>
      </Helmet>
      <Layout>
        <Masonry className="showcase">
          <a className="gumroad-button" href="https://gum.co/gLJKz">
            Buy my product
          </a>
        </Masonry>
      </Layout>
    </>
  );
};

export default Shop;
