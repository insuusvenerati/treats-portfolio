import * as React from 'react';
import Layout from '../components/Layout';
import BgImageContainer from '../components/BgImageContainer';
import { PageProps } from 'gatsby';

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <BgImageContainer />
  </Layout>
);

export default IndexPage;
