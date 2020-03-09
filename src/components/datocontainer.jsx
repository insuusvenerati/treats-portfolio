/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Masonry from 'react-masonry-component';
import Lightbox from 'react-image-lightbox';

const DatoContainer = () => {
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
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      {edges ? (
        <Masonry className="showcase">
          {edges.map(({ node: work }) => (
            <div role="presentation" key={work.id} className="showcase__item">
              <figure
                onClick={() => {
                  setPhotoIndex(
                    edges.findIndex((edge) => edge.node.id === work.id),
                  );
                  setOpen(!isOpen);
                  // console.log(photoIndex);
                  // console.log(selectedImage);
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
      {isOpen && (
        <Lightbox
          mainSrc={edges[photoIndex].node.fixed.src}
          nextSrc={edges[(photoIndex + 1) % edges.length].node.fixed.src}
          prevSrc={
            edges[(photoIndex + edges.length - 1) % edges.length].node.fixed.src
          }
          onMovePrevRequest={() => setPhotoIndex((i) => i - 1)}
          onMoveNextRequest={() => setPhotoIndex((i) => i + 1)}
          onCloseRequest={() => setOpen(!isOpen)}
          clickOutsideToClose
          discourageDownloads
        />
      )}
    </>
  );
};

export default DatoContainer;
