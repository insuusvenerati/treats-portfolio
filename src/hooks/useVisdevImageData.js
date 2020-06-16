import { graphql, useStaticQuery } from 'gatsby';

const useVisdevImageData = () => {
  const visdevImageData = useStaticQuery(
    graphql`
      query VisdevTags {
        allDatoCmsAsset(filter: { tags: { in: "visdev" } }) {
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
  return visdevImageData;
};

export default useVisdevImageData;
