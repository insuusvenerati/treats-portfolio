/* eslint-disable react/no-danger */
import * as Sentry from '@sentry/browser';
import { Link } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import React, { useState } from 'react';
import 'react-image-lightbox/style.css';
import useLayoutData from '../hooks/useLayoutData';
import '../styles/index.sass';

Sentry.init({
  release: `treats-porfolio@${process.env.npm_package_version}`,
});

const TemplateWrapper: React.FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { datoCmsSite, datoCmsHome, allDatoCmsSocialProfile } = useLayoutData();
  return (
    <>
      <div className={`container ${showMenu ? 'is-open' : ''}`}>
        <HelmetDatoCms favicon={datoCmsSite.faviconMetaTags} seo={datoCmsHome.seoMetaTags} />
        <div className="container__sidebar">
          <div className="sidebar">
            <h6 style={{ fontFamily: 'Montserrat' }} className="sidebar__title">
              <Link to="/">{datoCmsSite.globalSeo.siteName}</Link>
            </h6>
            <div
              className="sidebar__intro"
              dangerouslySetInnerHTML={{
                __html: datoCmsHome.introTextNode.childMarkdownRemark.html,
              }}
            />
            <ul className="sidebar__menu">
              <li>
                <Link to="/">bg & illustration</Link>
              </li>
              <li>
                <Link to="/visdev">visdev</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
            <p className="sidebar__social">
              {allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
                <a
                  key={profile.profileType}
                  href={profile.url}
                  target="blank"
                  className={`social social--${profile.profileType.toLowerCase()}`}
                ></a>
              ))}
            </p>
          </div>
        </div>
        <div className="container__body">
          <div className="container__mobile-header">
            <div className="mobile-header">
              <div className="mobile-header__menu">
                <a
                  href="#"
                  onClick={(e): void => {
                    e.preventDefault();
                    setShowMenu(!showMenu);
                  }}
                />
              </div>
              <div className="mobile-header__logo">
                <Link to="/">{datoCmsSite.globalSeo.siteName}</Link>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default TemplateWrapper;
