import React from 'react';
import { FluidObject } from 'gatsby-image';
import { GatsbyImage } from 'gatsby-plugin-image';
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
  sources?: Array<Sources>;
};

const ImageCard = ({
  edges,
  node,
  setPhotoIndex,
  setOpen,
  isOpen,
  gatsbyImageData,
}: ImageCardProps): JSX.Element => {
  return (
    <>
      <div role="presentation" className="showcase__item">
        <figure
          onClick={() => {
            setPhotoIndex(edges.nodes.findIndex((edge) => edge.id === node.id));
            setOpen(!isOpen);
          }}
          className="card"
        >
          <div>
            <GatsbyImage alt="temp alt" className="card__image" image={gatsbyImageData} />
          </div>
        </figure>
      </div>
    </>
  );
};

export default ImageCard;
