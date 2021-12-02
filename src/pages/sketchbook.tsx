import React from 'react';
import { PageProps } from 'gatsby';
import VisdevImageContainer from '../components/VisdevImageContainer';
import { LayoutData } from '../components/LayoutData';

const SketchbookPage: React.FC<PageProps> = () => (
  <LayoutData>
    <VisdevImageContainer />
  </LayoutData>
);

export default SketchbookPage;
