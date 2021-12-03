import { graphql, useStaticQuery } from 'gatsby';

const useBgImageData = (): GatsbyTypes.BGTagsQuery => {
  return useStaticQuery<GatsbyTypes.BGTagsQuery>(
    graphql`
      query BGTags {
        gatsbyImages: allDatoCmsAsset(
          filter: { tags: { in: "bg" } }
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

export default useBgImageData;
