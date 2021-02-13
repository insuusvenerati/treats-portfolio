import React, { Component, ErrorInfo } from 'react';
import * as Sentry from '@sentry/browser';

type ErrorBoundaryState = {
  error: string | null;
};

export default class ErrorBoundary extends Component<ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error });
    Sentry.configureScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });
    });
    Sentry.captureException(error);
  }

  render(): JSX.Element {
    const { error } = this.state;
    const { children } = this.props;
    if (error) {
      return <h1>Something went wrong</h1>;
    }
    return children;
  }
}
