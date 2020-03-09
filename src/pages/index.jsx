import React from 'react';
import Layout from '../components/layout';
import DatoContainer from '../components/datocontainer';
import ErrorBoundry from '../components/errorboundry';

const IndexPage = () => (
  <ErrorBoundry>
    <Layout>
      <DatoContainer />
    </Layout>
  </ErrorBoundry>
);

export default IndexPage;
