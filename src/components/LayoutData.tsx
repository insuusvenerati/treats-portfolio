import Layout from './Layout';
import React from 'react';
import useLayoutData from '../hooks/useLayoutData';

export const LayoutData = ({ children }) => {
  const data = useLayoutData();

  return (
    <div>
      <Layout data={data}>{children}</Layout>
    </div>
  );
};
