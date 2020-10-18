import { graphql, useStaticQuery } from 'gatsby';
import { LayoutQuery } from './__generated__/LayoutQuery';

const useLayoutData = (): LayoutQuery => {
  return useStaticQuery<LayoutQuery>(
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
              icon {
                fluid(maxWidth: 60, imgixParams: { fm: "webp" }) {
                  ...GatsbyDatoCmsFluid_noBase64
                }
              }
            }
          }
        }
        sidebar: allDatoCmsAsset(filter: { tags: { eq: "sidebar" } }) {
          nodes {
            fixed(width: 225) {
              ...GatsbyDatoCmsFixed_noBase64
              src
            }
          }
        }
        catImages: allDatoCmsAsset(filter: { tags: { eq: "cats" } }) {
          nodes {
            fixed(width: 149) {
              ...GatsbyDatoCmsFixed_noBase64
            }
          }
        }
        catIcon: datoCmsAsset(tags: { eq: "caticon" }) {
          fixed(width: 60, imgixParams: { fm: "webp" }) {
            ...GatsbyDatoCmsFixed_noBase64
          }
        }
      }
    `,
  );
};

export default useLayoutData;
