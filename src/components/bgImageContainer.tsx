import Img from 'gatsby-image';
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import Masonry from 'react-masonry-component';
import useBgImageData from '../hooks/useBgImageData';

const BGImageContainer: React.FC = () => {
  const { allDatoCmsAsset } = useBgImageData();

  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const edges = allDatoCmsAsset.edges;

  return (
    <>
      {React.useMemo(() => {
        return (
          <>
            {edges ? (
              <Masonry className="showcase">
                {edges.map(({ node }: any) => (
                  <div role="presentation" key={node.id} className="showcase__item">
                    {node.fluid ? (
                      <figure
                        onClick={(): void => {
                          setPhotoIndex(edges.findIndex((edge: any) => edge.node.id === node.id));
                          setOpen(!isOpen);
                        }}
                        className="card"
                      >
                        <Img fluid={node.fluid} />
                      </figure>
                    ) : (
                      <h1>Error</h1>
                    )}
                  </div>
                ))}
              </Masonry>
            ) : (
              <div>
                <h1>There was an error loading images</h1>
              </div>
            )}
          </>
        );
      }, [edges])}
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

export default BGImageContainer;
