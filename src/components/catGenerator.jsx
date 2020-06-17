import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const CatGenerator = ({ isOpen }) => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsAsset(filter: { tags: { eq: "cats" } }) {
        nodes {
          fixed(width: 200) {
            ...GatsbyDatoCmsFixed
          }
        }
      }
    }
  `);
  const { allDatoCmsAsset } = data;
  return isOpen && <Img style={{ borderRadius: '10px' }} fixed={allDatoCmsAsset.nodes[0].fixed} />;
};

export default CatGenerator;
