import { graphql, useStaticQuery } from 'gatsby';
import { ImageData } from './types/imageData';

const useVisdevImageData = (): ImageData => {
  return useStaticQuery<ImageData>(
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
