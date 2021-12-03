import { graphql, useStaticQuery } from 'gatsby';

const useLayoutData = () => {
  return useStaticQuery<GatsbyTypes.LayoutQueryQuery>(
    graphql`
      query LayoutQuery {
        datoCmsSite {
          globalSeo {
            siteName
          }
          faviconMetaTags {
            tags
          }
        }
        datoCmsHome {
          seoMetaTags {
            tags
          }
          introTextNode {
            childMarkdownRemark {
              html
            }
          }
          copyright
        }
        allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
          nodes {
            url
            icon {
              gatsbyImageData(placeholder: NONE, width: 60)
            }
            profileType
          }
        }
        sidebar: datoCmsAsset(tags: { eq: "sidebar" }) {
          url
        }
        catImages: allDatoCmsAsset(filter: { tags: { eq: "cats" } }) {
          nodes {
            gatsbyImageData(width: 149)
          }
        }
        catIcon: datoCmsAsset(tags: { eq: "caticon" }) {
          gatsbyImageData(width: 60)
        }
      }
    `,
  );
};

export default useLayoutData;
