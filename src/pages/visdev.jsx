import React from 'react';
import Layout from '../components/layout';
import VisdevImageContainer from '../components/visdevImageContainer';
import ErrorBoundry from '../components/errorboundry';

const VisdevPage = () => (
  <ErrorBoundry>
    <Layout>
      <VisdevImageContainer />
    </Layout>
  </ErrorBoundry>
);

export default VisdevPage;
