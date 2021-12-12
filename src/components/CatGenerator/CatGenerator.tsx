import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

const CatGenerator = ({ catImageFixed }): JSX.Element => {
  return <GatsbyImage alt="cat image" image={catImageFixed} style={{ borderRadius: '7px', zIndex: 2 }} />;
};

export default CatGenerator;
