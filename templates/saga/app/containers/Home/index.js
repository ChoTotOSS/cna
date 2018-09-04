import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Article from '~/app/components/Article';
import messages from './messages';

const BottomZone = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const A = styled.a`
  color: #222;
  display: block;
  border: 1px solid #d3d3d3;
  border-radius: 2px;
  background: #f8f8f8;
  padding: 10px;
  text-decoration: none;
`;

class Home extends React.Component {
  render() {
    const {
      home: { data },
      query,
    } = this.props;
    const newQuery = {
      ...query,
      page: query.page + 1,
    };
    const dataLength = data.length;

    return (
      <div>
        {data.map((item, index) => (
          <Article
            key={index}
            order={(query.page - 1) * dataLength + index + 1}
            point={item.points}
            title={item.title}
            postTime={item.time_ago}
            url={item.url}
            commentCount={item.comments_count}
            user={item.user}
          />
        ))}
        <BottomZone>
          <Link href={{ pathname: '/', query: newQuery }} passHref>
            <A>{messages.loadMore}</A>
          </Link>
        </BottomZone>
      </div>
    );
  }
}

export default Home;
