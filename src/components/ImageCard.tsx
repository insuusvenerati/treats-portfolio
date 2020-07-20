import React from 'react';
import Img from 'gatsby-image';

const ImageCard = ({ edges, node, setPhotoIndex, setOpen, isOpen }) => {
  return (
    <>
      <div role="presentation" className="showcase__item">
        <figure
          onClick={() => {
            setPhotoIndex(edges.findIndex((edge) => edge.node.id === node.id));
            setOpen(!isOpen);
          }}
          className="card"
        >
          <div data-sal-duration="200" data-sal-delay="0" data-sal-easing="ease" data-sal="slide-up">
            <Img fluid={node.fluid} className="card__image" />
          </div>
        </figure>
      </div>
    </>
  );
};

export default ImageCard;
