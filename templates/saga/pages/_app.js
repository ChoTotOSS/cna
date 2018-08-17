import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import withLayout from '@/hocs/withLayout';
import { initStore } from '@/store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
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

export default withRedux(initStore)(withReduxSaga({ async: true })(MyApp));
