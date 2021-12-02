/* eslint-disable react/no-danger */
import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import ContactPage from '../gatsby-theme-contact/components/contact-page';
import React from 'react';
import { AboutQuery } from './__generated__/AboutQuery';
import { LayoutData } from '../components/LayoutData';

type AboutPageProps = {
  data: AboutQuery;
} & PageProps;

const About: React.FC<AboutPageProps> = ({ data: { about } }) => {
  return (
    <LayoutData>
      <article className="sheet">
        <HelmetDatoCms seo={about.seoMetaTags} />
        <div className="sheet__inner">
          <h1 className="sheet__title">{about.title}</h1>
          <div className="sheet__gallery">
            <Img fluid={about.photo.fluid} />
          </div>
          <div
            className="sheet__body"
            dangerouslySetInnerHTML={{
              __html: about.bioNode.childMarkdownRemark.html,
            }}
          />
        </div>
        <div className="sheet__inner contact">
          <ContactPage />
        </div>
      </article>
    </LayoutData>
  );
};

export default About;

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
