/* eslint-disable react/no-danger */
import { Link } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import React, { useState } from 'react';
import 'react-image-lightbox/style.css';
import '../../styles/fonts.css';
import ImageTooltip from '../ImageTooltip/ImageTooltip';
import { GatsbyImage } from 'gatsby-plugin-image';

const Layout: React.FC<{ data: GatsbyTypes.LayoutQueryQuery }> = ({ children, data }) => {
  const { datoCmsSite, datoCmsHome, allDatoCmsSocialProfile, sidebar, catImages } = data;
  const [showMenu, setShowMenu] = useState(false);
  const [catImage, setCatImage] = useState(catImages.nodes[0].gatsbyImageData);

  const generateCatImageHandler = () => {
    const randomCatImage =
      catImages.nodes[Math.floor(Math.random() * catImages.nodes.length)].gatsbyImageData;
    setCatImage(randomCatImage);
  };

  return (
    <div className={`container ${showMenu ? 'is-open' : ''}`}>
      <HelmetDatoCms favicon={datoCmsSite.faviconMetaTags} seo={datoCmsHome.seoMetaTags} />

      <div className="container__sidebar">
        <ImageTooltip generateRandomCatImageHandler={generateCatImageHandler} catImage={catImage} />
        <div style={{ backgroundImage: `url(${sidebar.url})` }} className={`sidebar`}>
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
              <Link activeStyle={{ color: '#5d6b5b' }} to="/sketchbook">
                sketchbook
              </Link>
            </li>
            <li>
              <Link activeStyle={{ color: '#5d6b5b' }} to="/about">
                about & contact
              </Link>
            </li>
          </ul>
          <div className="centered">
            {allDatoCmsSocialProfile.nodes.map((profile) => (
              <a
                className={`social grow`}
                key={profile.profileType}
                style={{
                  cursor: 'pointer',
                }}
                href={profile.url}
                target="_blank"
                rel="noreferrer"
              >
                <GatsbyImage image={profile.icon.gatsbyImageData} alt={profile.profileType} />
              </a>
            ))}
            <a style={{ width: '55px' }}>
              <span
                data-tip="true"
                data-event="click"
                data-for="catGenerator"
                className="social social--cat grow"
                style={{ cursor: 'pointer' }}
              />
            </a>
          </div>
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
