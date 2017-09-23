import '@/assets/styles/globalStyles';
import React from 'react';
import styled from 'styled-components';
import Header from '@/components/Header';

const MainWrapper = styled.main`padding: 0 10px 50px 10px;`;

function withLayout(Child) {
  class WrappedComponent extends React.Component {
    static getInitialProps(context) {
      return Child.getInitialProps(context);
    }

    render() {
      return (
        <div>
          <Header />
          <MainWrapper>
            <Child {...this.props} />
          </MainWrapper>
        </div>
      );
    }
  }
  return WrappedComponent;
}

export default withLayout;
