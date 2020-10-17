import React, { useState } from 'react';
import useVisdevImageData from '../../hooks/useVisdevImageData';
import ImageCard from '../ImageCard/ImageCard';

const LazyMasonry = React.lazy(() => import('react-masonry-component'));
const LazyLightbox = React.lazy(() => import('react-image-lightbox'));

const VisdevImageContainer: React.FC = () => {
  const isSSR = typeof window === 'undefined';
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
      {!isSSR && (
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <LazyMasonry className="showcase">
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
                  key={desktopImage.node.id}
                  isOpen={isOpen}
                  setPhotoIndex={setPhotoIndex}
                  setOpen={setOpen}
                  node={desktopImage.node}
                  edges={desktopVisdevImage}
                  sources={sources}
                />
              );
            })}
          </LazyMasonry>
        </React.Suspense>
      )}
      )
      {!isSSR && isOpen && (
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <LazyLightbox
            mainSrc={desktopVisdevImage[photoIndex].node.fixed.src}
            nextSrc={desktopVisdevImage[(photoIndex + 1) % desktopVisdevImage.length].node.fixed.src}
            prevSrc={
              desktopVisdevImage[(photoIndex + desktopVisdevImage.length - 1) % desktopVisdevImage.length]
                .node.fixed.src
            }
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + desktopVisdevImage.length - 1) % desktopVisdevImage.length)
            }
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % desktopVisdevImage.length)}
            onCloseRequest={() => setOpen(!isOpen)}
            clickOutsideToClose
            discourageDownloads={false}
          />
        </React.Suspense>
      )}
    </>
  );
};

export default VisdevImageContainer;
