/* eslint-disable react/no-danger */
import { graphql, PageProps } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import ContactPage from '../gatsby-theme-contact/components/contact-page';
import React from 'react';
import Layout from '../components/layout';

type Tags = {
  tagName: string;
  content: string;
  attributes: {
    property: string;
    content: string;
    name: string;
  };
};

interface AboutPageProps extends PageProps {
  data: {
    about: {
      seoMetaTags: {
        tags: Array<Tags>;
      };
      title: string;
      subtitle: string;
      photo: {
        fluid: FluidObject;
      };
      bioNode: {
        childMarkdownRemark: {
          html: string;
        };
      };
    };
  };
}

const About: React.FC<AboutPageProps> = ({ data: { about } }) => {
  return (
    <Layout>
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
        <div style={{ marginLeft: '100px', marginTop: '70px' }} className="sheet__inner">
          <ContactPage />
        </div>
      </article>
    </Layout>
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
