import { graphql, useStaticQuery } from 'gatsby';

const useVisdevImageData = () => {
  const visdevImageData = useStaticQuery(
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
  return visdevImageData;
};

export default useVisdevImageData;
