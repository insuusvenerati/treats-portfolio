import { graphql, useStaticQuery } from 'gatsby';
import { BgTagsQuery } from '../../types/graphql-types';

const useBgImageData = (): BgTagsQuery => {
  return useStaticQuery<BgTagsQuery>(
    graphql`
      query BGTags {
        desktopBgImage: allDatoCmsAsset(
          filter: { tags: { in: "bg" } }
          sort: { fields: createdAt, order: DESC }
        ) {
          edges {
            node {
              id
              fixed(width: 1400) {
                ...GatsbyDatoCmsFixed
                src
              }
              fluid(maxWidth: 800) {
                ...GatsbyDatoCmsFluid
                src
              }
            }
          }
        }
        mobileBgImage: allDatoCmsAsset(
          filter: { tags: { in: "bg" } }
          sort: { fields: createdAt, order: DESC }
        ) {
          edges {
            node {
              id
              fixed(width: 400) {
                ...GatsbyDatoCmsFixed
                src
              }
              fluid(maxWidth: 300) {
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
