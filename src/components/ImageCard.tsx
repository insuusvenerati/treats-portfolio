import React from 'react';
import Img from 'gatsby-image';

const ImageCard: React.FC = ({ edges, node, setPhotoIndex, setOpen, isOpen }) => {
  return (
    <>
      <div role="presentation" className="showcase__item">
        <figure
          onClick={(): void => {
            setPhotoIndex(edges.findIndex((edge) => edge.node.id === node.id));
            setOpen(!isOpen);
          }}
          className="card"
        >
          <Img fluid={node.fluid} className="card__image" />
        </figure>
      </div>
    </>
  );
};

export default ImageCard;
