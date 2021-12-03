import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type ImageCardProps = {
  setOpen: (isOpen: boolean) => void;
  setPhotoIndex: (photoIndex: number) => void;
  isOpen: boolean;
  edges: any;
  node: Pick<GatsbyTypes.DatoCmsAsset, 'gatsbyImageData' | 'id' | 'url'>;
  gatsbyImageData: IGatsbyImageData;
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
