import { graphql, useStaticQuery } from 'gatsby';
import { VisdevTagsQuery } from '../../types/graphql-types';

const useVisdevImageData = (): VisdevTagsQuery => {
  return useStaticQuery<VisdevTagsQuery>(
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
