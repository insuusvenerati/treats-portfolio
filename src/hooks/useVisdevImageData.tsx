import { graphql, useStaticQuery } from 'gatsby';
import { VisdevTags } from './__generated__/VisdevTags';

const useVisdevImageData = (): VisdevTags => {
  return useStaticQuery<VisdevTags>(
    graphql`
      query VisdevTags {
        desktopVisdevImage: allDatoCmsAsset(filter: { tags: { in: "visdev" } }) {
          edges {
            node {
              id
              fixed(width: 1400) {
                ...GatsbyDatoCmsFixed
              }
              fluid(imgixParams: { w: "654" }) {
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
              fluid(imgixParams: { w: "350" }) {
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
