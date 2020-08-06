import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import Masonry from 'react-masonry-component';
import useVisdevImageData from '../../hooks/useVisdevImageData';
import ImageCard from '../ImageCard/ImageCard';

const VisdevImageContainer: React.FC = () => {
  const {
    desktopVisdevImage: { edges: desktopVisdevImage },
    mobileVisdevImage: { edges: mobileVisdevImage },
  } = useVisdevImageData();

  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const zippedImages = desktopVisdevImage.map((element, index) => {
    return [element, mobileVisdevImage[index]];
  });

  return (
    <>
      <Masonry className="showcase">
        {zippedImages.map(([desktopImage, mobileImage]) => {
          const sources = [
            mobileImage.node.fluid,
            {
              ...desktopImage.node.fluid,
              media: `(min-width: 768px)`,
            },
          ];
          return (
            <>
              <ImageCard
                key={desktopImage.node.id}
                isOpen={isOpen}
                setPhotoIndex={setPhotoIndex}
                setOpen={setOpen}
                node={desktopImage.node}
                edges={desktopVisdevImage}
                sources={sources}
              />
            </>
          );
        })}
      </Masonry>
      )
      {isOpen && (
        <Lightbox
          mainSrc={desktopVisdevImage[photoIndex].node.fixed.src}
          nextSrc={desktopVisdevImage[(photoIndex + 1) % desktopVisdevImage.length].node.fixed.src}
          prevSrc={
            desktopVisdevImage[(photoIndex + desktopVisdevImage.length - 1) % desktopVisdevImage.length].node
              .fixed.src
          }
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + desktopVisdevImage.length - 1) % desktopVisdevImage.length)
          }
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % desktopVisdevImage.length)}
          onCloseRequest={() => setOpen(!isOpen)}
          clickOutsideToClose
          discourageDownloads={false}
        />
      )}
    </>
  );
};

export default VisdevImageContainer;
