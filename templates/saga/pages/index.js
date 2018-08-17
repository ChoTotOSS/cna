import React from 'react';
import { connect } from 'react-redux';
import Home from '@/containers/Home';
import { fetchData } from '@/containers/Home/actions';

class Index extends React.Component {
  static async getInitialProps(context) {
    const { store, req, isServer, res, query } = context;

    if (!query.page || isNaN(query.page)) {
      query.page = 1;
    } else {
      query.page = parseInt(query.page);
    }

    return {
      isServer,
      query,
    };
  }

  componentDidMount() {
    const { dispatch, query } = this.props;
    dispatch(fetchData(query));
  }

  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    home: state.home,
  };
};

export default connect(
  mapStateToProps,
  null
)(Index);
