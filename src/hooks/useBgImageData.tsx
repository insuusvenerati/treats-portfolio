import { graphql, useStaticQuery } from 'gatsby';
import { BGTags } from './__generated__/BGTags';

const useBgImageData = (): BGTags => {
  return useStaticQuery<BGTags>(
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
