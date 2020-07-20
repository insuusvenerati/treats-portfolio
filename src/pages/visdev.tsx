import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import VisdevImageContainer from '../components/visdevImageContainer';
import ErrorBoundary from '../components/errorBoundary';

const VisdevPage: React.FC<PageProps> = () => (
  <ErrorBoundary>
    <Layout>
      <VisdevImageContainer />
    </Layout>
  </ErrorBoundary>
);

export default VisdevPage;
