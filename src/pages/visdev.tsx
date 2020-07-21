import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import VisdevImageContainer from '../components/visdevImageContainer';

const VisdevPage: React.FC<PageProps> = () => (
  <Layout>
    <VisdevImageContainer />
  </Layout>
);

export default VisdevPage;
