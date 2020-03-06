/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Masonry from 'react-masonry-component';
import Lightbox from 'react-image-lightbox';

const DatoContainer = () => {
  const data = useStaticQuery(graphql`
    query DatoContainerQuery {
      allDatoCmsWork {
        edges {
          node {
            id
            coverImage {
              fluid(maxWidth: 1100) {
                ...GatsbyDatoCmsSizes
                src
              }
              fixed(width: 1100) {
                ...GatsbyDatoCmsFixed
                src
              }
            }
          }
        }
      }
    }
  `);

  const [edges] = useState(data.allDatoCmsWork.edges);
  const [isOpen, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  return (
    <>
      {edges ? (
        <Masonry className="showcase">
          {edges.map(({ node: work }) => {
            return (
              <div role="presentation" key={work.id} className="showcase__item">
                <figure
                  onClick={() => {
                    setSelectedImage(() => work.coverImage.fixed);
                    setOpen(!isOpen);
                  }}
                  className="card"
                >
                  {work.coverImage.fixed ? (
                    <Img fluid={work.coverImage.fixed} />
                  ) : (
                    <h1>No Image</h1>
                  )}
                </figure>
              </div>
            );
          })}
        </Masonry>
      ) : (
        <h1>There was an error loading images</h1>
      )}
      {isOpen && selectedImage && (
        <Lightbox
          mainSrc={selectedImage.src}
          onCloseRequest={() => setOpen(!isOpen)}
        />
      )}
    </>
  );
};

export default DatoContainer;
