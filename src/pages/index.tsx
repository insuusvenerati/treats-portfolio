import { PageProps } from 'gatsby';
import * as React from 'react';
import BgImageContainer from '../components/BgImageContainer';
import { LayoutData } from '../components/LayoutData';

const IndexPage: React.FC<PageProps> = () => (
  <LayoutData>
    <BgImageContainer />
  </LayoutData>
);

export default IndexPage;
