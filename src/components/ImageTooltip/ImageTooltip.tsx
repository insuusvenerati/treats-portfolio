import React from 'react';
import ReactTooltip from 'react-tooltip';
import CatGenerator from '../CatGenerator/CatGenerator';

const ImageTooltip: React.FC<{ catImage: never; generateRandomCatImageHandler: () => void }> = ({
  catImage,
  generateRandomCatImageHandler,
}) => {
  return (
    <ReactTooltip
      afterHide={generateRandomCatImageHandler}
      className="tooltip"
      globalEventOff="click"
      type="dark"
      id="catGenerator"
      place="top"
      effect="solid"
      offset={{ right: 80, bottom: 8 }}
      // backgroundColor="#95816f"
      backgroundColor={'rgba(0,0,0,0.0)'}
    >
      <CatGenerator catImageFixed={catImage} />
    </ReactTooltip>
  );
};

export default ImageTooltip;
