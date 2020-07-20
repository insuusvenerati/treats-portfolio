import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const CatGenerator = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsAsset(filter: { tags: { eq: "cats" } }) {
        nodes {
          fixed(width: 149) {
            ...GatsbyDatoCmsFixed
          }
        }
      }
    }
  `);
  const { allDatoCmsAsset } = data;
  return <Img style={{ borderRadius: '7px', zIndex: 2 }} fixed={allDatoCmsAsset.nodes[0].fixed} />;
};

export default CatGenerator;
