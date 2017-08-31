import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '@/store'

import Home from '@/containers/Home'
import { syncData, fetchData } from '@/containers/Home/actions'
import withLayout from '@/hocs/withLayout'

import config from '@/config'
import request from '@/utils/request'

class Index extends React.Component {
  static async getInitialProps (context) {
    const { store, req, isServer, res, query } = context

    if (!query.page || isNaN(query.page)) {
      query.page = 1
    } else {
      query.page = parseInt(query.page)
    }

    const data = await fetchData(query)

    return {
      isServer,
      data,
      query
    }
  }

  componentDidMount () {
    const { dispatch, data } = this.props 
    dispatch(syncData({ data }))
  }

  render () {
    return (
      <Home {...this.props} />
    )
  }
}

const mapStateToProps = state => {
  return {
    home: state.home
  }
}

export default withRedux(initStore, mapStateToProps, null)(
  withLayout(Index)
)
