import React, { useState } from 'react';
import Masonry from 'react-masonry-component';
import useBgImageData from '../../hooks/useBgImageData';
import ImageCard from '../ImageCard/ImageCard';

const LazyLightbox = React.lazy(() => import('react-image-lightbox'));

const BgImageContainer = (): JSX.Element => {
  const isSSR = typeof window === 'undefined';
  const {
    desktopBgImage: { edges: desktopBgImage },
    mobileBgImage: { edges: mobileBgImage },
  } = useBgImageData();

  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const zippedImages = desktopBgImage.map((element, index) => {
    return [element, mobileBgImage[index]];
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
            <ImageCard
              isOpen={isOpen}
              setOpen={setOpen}
              setPhotoIndex={setPhotoIndex}
              key={desktopImage.node.id}
              sources={sources}
              edges={desktopBgImage}
              node={desktopImage.node}
            />
          );
        })}
      </Masonry>
      {!isSSR && isOpen && (
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <LazyLightbox
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
        </React.Suspense>
      )}
    </>
  );
};

export default BgImageContainer;
