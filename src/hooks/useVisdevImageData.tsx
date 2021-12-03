import { graphql, useStaticQuery } from 'gatsby';

const useVisdevImageData = (): GatsbyTypes.VisdevTagsQuery => {
  return useStaticQuery<GatsbyTypes.VisdevTagsQuery>(
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
