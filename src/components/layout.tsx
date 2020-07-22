/* eslint-disable react/no-danger */
import { node } from 'prop-types';
import { Link } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import React, { useState } from 'react';
import 'react-image-lightbox/style.css';
import useLayoutData from '../hooks/useLayoutData';
import ImageTooltip from './imageTooltip';

const Layout: React.FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { datoCmsSite, datoCmsHome, allDatoCmsSocialProfile, allDatoCmsAsset } = useLayoutData();

  return (
    <div className={`container ${showMenu ? 'is-open' : ''}`}>
      <HelmetDatoCms favicon={datoCmsSite.faviconMetaTags} seo={datoCmsHome.seoMetaTags} />
      <div className="container__sidebar">
        <div style={{ backgroundImage: `url(${allDatoCmsAsset.nodes[0].fixed.src})` }} className={`sidebar`}>
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
              <Link activeStyle={{ color: '#5d6b5b' }} to="/">
                bg & illustration
              </Link>
            </li>
            <li>
              <Link activeStyle={{ color: '#5d6b5b' }} to="/visdev">
                visdev
              </Link>
            </li>
            <li>
              <Link activeStyle={{ color: '#5d6b5b' }} to="/about">
                about & contact
              </Link>
            </li>
          </ul>
          <p className="centered">
            {allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
              <a
                key={profile.profileType}
                className={`social grow social--${profile.profileType.toLowerCase()}`}
                style={{ cursor: 'pointer' }}
                href={profile.url}
                target="_blank"
                rel="noreferrer"
              />
            ))}
            <a
              data-tip
              data-event="click"
              data-for="catGenerator"
              className="social social--cat grow"
              style={{ cursor: 'pointer' }}
            />
          </p>
          <ImageTooltip />
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
  );
};

export default Layout;

Layout.propTypes = {
  children: node,
};