/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Masonry from 'react-masonry-component';
import Lightbox from 'react-image-lightbox';

const DatoContainer = () => {
  // const data = useStaticQuery(graphql`
  //   query DatoContainerQuery {
  //     allDatoCmsWork {
  //       edges {
  //         node {
  //           id
  //           coverImage {
  //             fixed(width: 1100) {
  //               ...GatsbyDatoCmsFixed
  //               src
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  const data = useStaticQuery(graphql`
    query AssetQuery {
      allDatoCmsAsset {
        edges {
          node {
            id
            tags
            fixed(width: 1100) {
              ...GatsbyDatoCmsFixed
              src
            }
          }
        }
      }
    }
  `);

  const [edges] = useState(data.allDatoCmsAsset.edges);
  const [isOpen, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  return (
    <>
      {edges ? (
        <Masonry className="showcase">
          {edges.map(({ node: work }) => (
            <div role="presentation" key={work.id} className="showcase__item">
              <figure
                onClick={() => {
                  setSelectedImage(() => work.fixed);
                  setOpen(!isOpen);
                }}
                className="card"
              >
                {work.fixed ? <Img fluid={work.fixed} /> : <h1>No Image</h1>}
              </figure>
            </div>
          ))}
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
