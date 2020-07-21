import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { DatoCmsAssetNodes } from '../hooks/types/imageData';

type ImageCardProps = {
  setOpen: (isOpen: boolean) => void;
  // TODO What argument type goes here?
  setPhotoIndex: (edges: any) => void;
  isOpen: boolean;
  edges: Array<DatoCmsAssetNodes>;
  node: {
    fluid: FluidObject;
    id: number;
  };
};

const ImageCard: React.FC<ImageCardProps> = ({ edges, node, setPhotoIndex, setOpen, isOpen }) => {
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
