import React from 'react';
import { PageProps } from 'gatsby';
import * as Sentry from '@sentry/gatsby';
import VisdevImageContainer from '../components/VisdevImageContainer';
import { LayoutData } from '../components/LayoutData';

const SketchbookPage: React.FC<PageProps> = () => (
  <LayoutData>
    <Sentry.ErrorBoundary fallback={<h1>Error</h1>}>
      <VisdevImageContainer />
    </Sentry.ErrorBoundary>
  </LayoutData>
);

export default SketchbookPage;
