import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import withLayout from '~/app/hocs/withLayout';
import { initStore } from '~/app/store';

export default withRedux(initStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      const WrappedComponent = withLayout(Component);
      return (
        <Container>
          <Provider store={store}>
            <WrappedComponent {...pageProps} />
          </Provider>
        </Container>
      );
    }
  }
);
