import React from 'react';
import { connect } from 'react-redux';
import Home from '~/app/containers/Home';
import { syncData, fetchData } from '~/app/containers/Home/actions';

class Index extends React.Component {
  static async getInitialProps(context) {
    const { store, req, isServer, res, query } = context;

    if (!query.page || isNaN(query.page)) {
      query.page = 1;
    } else {
      query.page = parseInt(query.page);
    }

    const data = await fetchData(query);

    return {
      isServer,
      data,
      query,
    };
  }

  componentDidMount() {
    const { dispatch, data } = this.props;
    dispatch(syncData({ data }));
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
