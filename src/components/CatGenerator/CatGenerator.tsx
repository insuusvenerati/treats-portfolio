import Img, { FixedObject } from 'gatsby-image';
import React from 'react';

const CatGenerator: React.FC<{ catImageFixed: FixedObject }> = ({ catImageFixed }) => {
  return <Img style={{ borderRadius: '7px', zIndex: 2 }} fixed={catImageFixed} />;
};

export default CatGenerator;
