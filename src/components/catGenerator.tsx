import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

type DatoCmsAssetNodes = {
  fixed: {
    src: string;
    base64: string;
    tracedSVG: string;
    aspectRatio: number;
    width: number;
    height: number;
    srcSet: string;
    sizes: string;
  };
};

type CatImages = {
  allDatoCmsAsset: {
    nodes: Array<DatoCmsAssetNodes>;
  };
};

const CatGenerator: React.FC = () => {
  const { allDatoCmsAsset } = useStaticQuery<CatImages>(graphql`
    query CatQuery {
      allDatoCmsAsset(filter: { tags: { eq: "cats" } }) {
        nodes {
          fixed(width: 149) {
            ...GatsbyDatoCmsFixed
          }
        }
      }
    }
  `);
  return <Img style={{ borderRadius: '7px', zIndex: 2 }} fixed={allDatoCmsAsset.nodes[0].fixed} />;
};

export default CatGenerator;
