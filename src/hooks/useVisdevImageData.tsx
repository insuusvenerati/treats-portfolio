import { graphql, useStaticQuery } from 'gatsby';
import { VisDevImageData } from './types/imageData';

const useVisdevImageData = (): VisDevImageData => {
  return useStaticQuery<VisDevImageData>(
    graphql`
      query VisdevTags {
        allDatoCmsAsset(filter: { tags: { in: "visdev" } }) {
          edges {
            node {
              id
              fixed(width: 1400) {
                ...GatsbyDatoCmsFixed
              }
              fluid(maxWidth: 2000) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `,
  );
};

export default useVisdevImageData;
