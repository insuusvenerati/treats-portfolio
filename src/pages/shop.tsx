import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import Masonry from 'react-masonry-component';
import Layout from '../components/Layout';
import { ShopPageQuery } from './__generated__/ShopPageQuery';

export const query = graphql`
  query ShopPageQuery {
    allGumroadProductType {
      edges {
        node {
          id
          image
          name
          url
        }
      }
    }
  }
`;

type Data = {
  data: ShopPageQuery;
};

const Shop = ({ data }: Data): JSX.Element => {
  return (
    <>
      <Helmet>
        <script type="text/javascript" src="https://gumroad.com/js/gumroad.js"></script>
      </Helmet>
      <Layout>
        <Masonry className="showcase">
          {!data.allGumroadProductType.edges ? (
            <h1>Loading...</h1>
          ) : (
            data.allGumroadProductType.edges.map(({ node: product }) => {
              return (
                <div key={product.id} role="presentation" className="showcase__item">
                  <figure className="card">
                    <img className="card__image" src={product.image} alt="" />
                    <a className="gumroad-button" href={product.url}>
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
