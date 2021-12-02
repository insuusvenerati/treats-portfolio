import React, { useState } from 'react';
import useVisdevImageData from '../../hooks/useVisdevImageData';
import ImageCard from '../ImageCard/ImageCard';
import Masonry from 'react-masonry-component';
import Lightbox from 'react-image-lightbox';

const VisdevImageContainer: React.FC = () => {
  const isSSR = typeof window === 'undefined';

  const { gatsbyImages } = useVisdevImageData();

  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <Masonry className="showcase">
        {gatsbyImages.nodes.map((image) => {
          return (
            <ImageCard
              key={image.id}
              isOpen={isOpen}
              setPhotoIndex={setPhotoIndex}
              setOpen={setOpen}
              node={image}
              edges={gatsbyImages}
              gatsbyImageData={image.gatsbyImageData}
            />
          );
        })}
      </Masonry>

      {!isSSR && isOpen && (
        <Lightbox
          mainSrc={gatsbyImages.nodes[photoIndex].url}
          nextSrc={gatsbyImages.nodes[(photoIndex + 1) % gatsbyImages.nodes.length].url}
          prevSrc={
            gatsbyImages.nodes[(photoIndex + gatsbyImages.nodes.length - 1) % gatsbyImages.nodes.length].url
          }
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + gatsbyImages.nodes.length - 1) % gatsbyImages.nodes.length)
          }
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % gatsbyImages.nodes.length)}
          onCloseRequest={() => setOpen(!isOpen)}
          clickOutsideToClose
          discourageDownloads={false}
          enableZoom={true}
        />
      )}
    </>
  );
};

export default VisdevImageContainer;
