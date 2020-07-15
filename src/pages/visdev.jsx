import React from 'react';
import Layout from '../components/layout';
import VisdevImageContainer from '../components/visdevImageContainer';
import ErrorBoundary from '../components/errorBoundary';

const VisdevPage = () => (
  <ErrorBoundary>
    <Layout>
      <VisdevImageContainer />
    </Layout>
  </ErrorBoundary>
);

export default VisdevPage;
