import { graphql, useStaticQuery } from 'gatsby';

const useBgImageData = () => {
  const bgImageData = useStaticQuery(
    graphql`
      query BGTags {
        allDatoCmsAsset(filter: { tags: { in: "bg" } }) {
          edges {
            node {
              id
              fixed(width: 1100) {
                ...GatsbyDatoCmsFixed
                src
              }
              fluid(maxWidth: 900) {
                ...GatsbyDatoCmsFluid
                src
              }
            }
          }
        }
      }
    `,
  );
  return bgImageData;
};

export default useBgImageData;
