import { graphql, useStaticQuery } from 'gatsby';
import { VisDevImageData } from './types/imageData';

const useVisdevImageData = (): VisDevImageData => {
  return useStaticQuery<VisDevImageData>(
    graphql`
      query VisdevTags {
        desktopVisdevImage: allDatoCmsAsset(filter: { tags: { in: "visdev" } }) {
          edges {
            node {
              id
              fixed(width: 1400) {
                ...GatsbyDatoCmsFixed
              }
              fluid(maxWidth: 800) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
        mobileVisdevImage: allDatoCmsAsset(filter: { tags: { in: "visdev" } }) {
          edges {
            node {
              id
              fixed(width: 400) {
                ...GatsbyDatoCmsFixed
              }
              fluid(maxWidth: 300) {
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
