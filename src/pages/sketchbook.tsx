import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import VisdevImageContainer from '../components/VisdevImageContainer';

const SketchbookPage: React.FC<PageProps> = () => (
  <Layout>
    <VisdevImageContainer />
  </Layout>
);

export default SketchbookPage;
