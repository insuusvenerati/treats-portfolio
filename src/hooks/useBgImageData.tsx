import { graphql, useStaticQuery } from 'gatsby';

const useBgImageData = () => {
  return useStaticQuery(
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
