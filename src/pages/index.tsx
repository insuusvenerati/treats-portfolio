import * as React from 'react';
import Layout from '../components/layout';
import BGImageContainer from '../components/bgImageContainer';
import {PageProps} from 'gatsby';

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <BGImageContainer />
  </Layout>
);

export default IndexPage;
