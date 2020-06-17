/* eslint-disable react/no-danger */
import { Link } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import React, { useState } from 'react';
import 'react-image-lightbox/style.css';
import useLayoutData from '../hooks/useLayoutData';
import '../styles/index.sass';
import AnimatedAnchor from './animatedAnchor';
import CatGenerator from './catGenerator';
import ErrorBoundry from './errorboundry';

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { datoCmsSite, datoCmsHome, allDatoCmsSocialProfile, allDatoCmsAsset } = useLayoutData();
  const [isOpen, setOpen] = useState(false);
  const [isHovered, setHovered] = useState(false);

  return (
    <ErrorBoundry>
      <div className={`container ${showMenu ? 'is-open' : ''}`}>
        <HelmetDatoCms favicon={datoCmsSite.faviconMetaTags} seo={datoCmsHome.seoMetaTags} />
        <div className="container__sidebar">
          <div
            style={{ backgroundImage: `url(${allDatoCmsAsset.nodes[0].fixed.src})` }}
            className={`sidebar`}
          >
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
            <p>
              {allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
                <a
                  key={profile.profileType}
                  className={`social social--${profile.profileType.toLowerCase()}`}
                ></a>
              ))}
              <a
                onClick={() => setOpen(!isOpen)}
                className="social social--cat"
                style={{ cursor: 'pointer' }}
              ></a>
            </p>
            <CatGenerator isOpen={isOpen} />
          </div>
        </div>
        <div className="container__body">
          <div className="container__mobile-header">
            <div className="mobile-header">
              <div className="mobile-header__menu">
                <a
                  href="#"
                  onClick={(e) => {
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
    </ErrorBoundry>
  );
};

export default Layout;
