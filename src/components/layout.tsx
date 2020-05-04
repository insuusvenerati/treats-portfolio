/* eslint-disable react/no-danger */
import * as Sentry from '@sentry/browser';
import { Link } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import React, { useState } from 'react';
import 'react-image-lightbox/style.css';
import useLayoutData from '../hooks/useLayoutData';
import '../styles/index.sass';
import CatGenerator from './catGenerator';
import AnimatedAnchor from './animatedAnchor';

Sentry.init({
  release: `treats-porfolio@${process.env.npm_package_version}`,
});

const TemplateWrapper: React.FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { datoCmsSite, datoCmsHome, allDatoCmsSocialProfile } = useLayoutData();
  const [isOpen, setOpen] = useState(false);
  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <div className={`container ${showMenu ? 'is-open' : ''}`}>
        <HelmetDatoCms favicon={datoCmsSite.faviconMetaTags} seo={datoCmsHome.seoMetaTags} />
        <div className="container__sidebar">
          <div data-sal-delay="0" data-sal-easing="ease" data-sal="slide-up" className="sidebar">
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
                <>
                  <AnimatedAnchor profile={profile}></AnimatedAnchor>
                </>
              ))}
              <a
                onClick={(): void => setOpen(!isOpen)}
                onMouseLeave={(): void => setHovered(false)}
                onMouseEnter={(): void => setHovered(true)}
                className={isHovered ? `animated pulse infinite social social--cat` : `social social--cat`}
                style={{ cursor: 'pointer' }}
              >
                <CatGenerator isOpen={isOpen} />
              </a>
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
