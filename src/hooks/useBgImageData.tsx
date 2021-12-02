import { graphql, useStaticQuery } from 'gatsby';
import { BGTags } from './__generated__/BGTags';

const useBgImageData = (): BGTags => {
  return useStaticQuery<BGTags>(
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
