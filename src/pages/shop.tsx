/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import Helmet from 'react-helmet';
import Masonry from 'react-masonry-component';
import useSWR from 'swr';
import Layout from '../components/Layout';

const url = `https://api.gumroad.com/v2/products?access_token=${process.env.GATSBY_GUMROAD_ACCESS_TOKEN}`;

/*
 @todo Type useSWR
*/
const Shop = (): JSX.Element => {
  const { data } = useSWR(url, (url) => fetch(url).then((res) => res.json()));

  return (
    <>
      <Helmet>
        <script type="text/javascript" src="https://gumroad.com/js/gumroad.js"></script>
      </Helmet>
      <Layout>
        <Masonry className="showcase">
          {!data ? (
            <h1>Loading...</h1>
          ) : (
            data.products.map((product) => {
              return (
                <div key={product.id} role="presentation" className="showcase__item">
                  <figure className="card">
                    <img className="card__image" src={product.preview_url} alt="" />
                    <a className="gumroad-button" href={product.short_url}>
                      Buy my product
                    </a>
                  </figure>
                </div>
              );
            })
          )}
        </Masonry>
      </Layout>
    </>
  );
};

export default Shop;
