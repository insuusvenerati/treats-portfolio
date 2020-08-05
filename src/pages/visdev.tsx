import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import VisdevImageContainer from '../components/VisdevImageContainer';

const VisdevPage: React.FC<PageProps> = () => (
  <Layout>
    <VisdevImageContainer />
  </Layout>
);

export default VisdevPage;
