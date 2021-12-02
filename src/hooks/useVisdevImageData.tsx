import { graphql, useStaticQuery } from 'gatsby';
import { VisdevTags } from './__generated__/VisdevTags';

const useVisdevImageData = (): VisdevTags => {
  return useStaticQuery<VisdevTags>(
    graphql`
      query VisdevTags {
        gatsbyImages: allDatoCmsAsset(
          filter: { tags: { in: "visdev" } }
          sort: { fields: filename, order: ASC }
        ) {
          nodes {
            gatsbyImageData(width: 1400, placeholder: BLURRED)
            id
            url
          }
        }
      }
    `,
  );
};

export default useVisdevImageData;
