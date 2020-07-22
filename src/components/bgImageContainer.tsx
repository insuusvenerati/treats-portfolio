import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import Masonry from 'react-masonry-component';
import 'react-perfect-scrollbar/dist/css/styles.css';
import useBgImageData from '../hooks/useBgImageData';
import ImageCard from './ImageCard';
import { isMobile, isBrowser } from 'react-device-detect';

const BGImageContainer: React.FC = () => {
  const {
    desktopBgImage: { edges: desktopBgImage },
    mobileBgImage: { edges: mobileBgImage },
  } = useBgImageData();

  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      {isBrowser && (
        <Masonry className="showcase">
          {desktopBgImage.map(({ node }) => (
            <ImageCard
              key={node.id}
              isOpen={isOpen}
              setPhotoIndex={setPhotoIndex}
              setOpen={setOpen}
              node={node}
              edges={desktopBgImage}
            />
          ))}
        </Masonry>
      )}
      {isMobile && (
        <Masonry className="showcase">
          {mobileBgImage.map(({ node }) => (
            <ImageCard
              key={node.id}
              isOpen={isOpen}
              setPhotoIndex={setPhotoIndex}
              setOpen={setOpen}
              node={node}
              edges={mobileBgImage}
            />
          ))}
        </Masonry>
      )}
      {isOpen && (
        <Lightbox
          mainSrc={desktopBgImage[photoIndex].node.fixed.src}
          nextSrc={desktopBgImage[(photoIndex + 1) % desktopBgImage.length].node.fixed.src}
          prevSrc={
            desktopBgImage[(photoIndex + desktopBgImage.length - 1) % desktopBgImage.length].node.fixed.src
          }
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + desktopBgImage.length - 1) % desktopBgImage.length)
          }
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % desktopBgImage.length)}
          onCloseRequest={() => setOpen(!isOpen)}
          clickOutsideToClose
          discourageDownloads={false}
          enableZoom={true}
        />
      )}
    </>
  );
};

export default BGImageContainer;
