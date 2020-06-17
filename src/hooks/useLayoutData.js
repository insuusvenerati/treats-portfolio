import { graphql, useStaticQuery } from 'gatsby';

const useLayoutData = () => {
  const layoutData = useStaticQuery(
    graphql`
      query LayoutQuery {
        datoCmsSite {
          globalSeo {
            siteName
          }
          faviconMetaTags {
            ...GatsbyDatoCmsFaviconMetaTags
          }
        }
        datoCmsHome {
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
          introTextNode {
            childMarkdownRemark {
              html
            }
          }
          copyright
        }
        allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
          edges {
            node {
              profileType
              url
            }
          }
        }
        allDatoCmsAsset(filter: { tags: { eq: "sidebar" } }) {
          nodes {
            fixed(width: 225) {
              ...GatsbyDatoCmsFixed
              src
            }
          }
        }
      }
    `,
  );
  return layoutData;
};

export default useLayoutData;
