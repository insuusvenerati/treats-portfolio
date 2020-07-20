import { graphql, useStaticQuery } from 'gatsby';
import { ImageData } from './types/imageData';

const useBgImageData = (): ImageData => {
  return useStaticQuery<ImageData>(
    graphql`
      query BGTags {
        allDatoCmsAsset(filter: { tags: { in: "bg" } }, sort: { fields: createdAt, order: DESC }) {
          edges {
            node {
              id
              fixed(width: 1400) {
                ...GatsbyDatoCmsFixed
                src
              }
              fluid(maxWidth: 2000) {
                ...GatsbyDatoCmsFluid
                src
              }
            }
          }
        }
      }
    `,
  );
};

export default useBgImageData;
