import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import {
  BGTags_desktopBgImage_edges,
  BGTags_desktopBgImage_edges_node,
} from '../../hooks/__generated__/BGTags';

type Sources = {
  fluid: FluidObject;
  media: string;
};

type ImageCardProps = {
  setOpen: (isOpen: boolean) => void;
  setPhotoIndex: (photoIndex: number) => void;
  isOpen: boolean;
  edges: Array<BGTags_desktopBgImage_edges>;
  node: BGTags_desktopBgImage_edges_node;
  sources: Array<Sources>;
};

const ImageCard: React.FC<ImageCardProps> = ({ edges, node, setPhotoIndex, setOpen, isOpen, sources }) => {
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
            <Img fluid={sources} className="card__image" />
          </div>
        </figure>
      </div>
    </>
  );
};

export default ImageCard;
