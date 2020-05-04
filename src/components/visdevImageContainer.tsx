import Img from 'gatsby-image';
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import Masonry from 'react-masonry-component';
import { VisdevTagsQuery } from '../graphqlTypes';
import useVisdevImageData from '../hooks/useVisdevImageData';
import ImageCard from './ImageCard';

const VisdevImageContainer: React.FC<VisdevTagsQuery> = () => {
  const { allDatoCmsAsset } = useVisdevImageData();

  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const edges = allDatoCmsAsset.edges;

  return (
    <>
      <Masonry className="showcase">
        {edges.map(({ node }) => (
          <ImageCard
            key={node.id}
            isOpen={isOpen}
            setPhotoIndex={setPhotoIndex}
            setOpen={setOpen}
            node={node}
            edges={edges}
          />
        ))}
      </Masonry>
      )
      {isOpen && (
        <Lightbox
          mainSrc={edges[photoIndex].node.fixed.src}
          nextSrc={edges[(photoIndex + 1) % edges.length].node.fixed.src}
          prevSrc={edges[(photoIndex + edges.length - 1) % edges.length].node.fixed.src}
          onMovePrevRequest={(): void => setPhotoIndex((photoIndex + edges.length - 1) % edges.length)}
          onMoveNextRequest={(): void => setPhotoIndex((photoIndex + 1) % edges.length)}
          onCloseRequest={(): void => setOpen(!isOpen)}
          clickOutsideToClose
          discourageDownloads={false}
        />
      )}
    </>
  );
};

export default VisdevImageContainer;
