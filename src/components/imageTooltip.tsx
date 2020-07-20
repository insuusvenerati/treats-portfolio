import React from 'react';
import ReactTooltip from 'react-tooltip';
import CatGenerator from './catGenerator';

const ImageTooltip: React.FC = () => {
  return (
    // <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
    <ReactTooltip
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
      <CatGenerator />
    </ReactTooltip>
    // </motion.div>
  );
};

export default ImageTooltip;
