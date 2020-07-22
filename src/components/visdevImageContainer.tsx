import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import Masonry from 'react-masonry-component';
import useVisdevImageData from '../hooks/useVisdevImageData';
import ImageCard from './ImageCard';
import { isMobile, isBrowser } from 'react-device-detect';

const VisdevImageContainer: React.FC = () => {
  const {
    desktopVisdevImage: { edges: desktopVisdevImage },
    mobileVisdevImage: { edges: mobileVisdevImage },
  } = useVisdevImageData();

  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      {isBrowser && (
        <Masonry className="showcase">
          {desktopVisdevImage.map(({ node }) => (
            <ImageCard
              key={node.id}
              isOpen={isOpen}
              setPhotoIndex={setPhotoIndex}
              setOpen={setOpen}
              node={node}
              edges={desktopVisdevImage}
            />
          ))}
        </Masonry>
      )}
      {isMobile && (
        <Masonry className="showcase">
          {mobileVisdevImage.map(({ node }) => (
            <ImageCard
              key={node.id}
              isOpen={isOpen}
              setPhotoIndex={setPhotoIndex}
              setOpen={setOpen}
              node={node}
              edges={mobileVisdevImage}
            />
          ))}
        </Masonry>
      )}
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
