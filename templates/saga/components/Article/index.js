import React from 'react';

import styled from 'styled-components';

import messages from './messages';

const ArticleWrapper = styled.article`
  margin-bottom: 15px;
  &:hover {
    background-color: #eee;
  }
`;

const Title = styled.h2`
  color: #000;
  line-height: 1.2;
  margin-bottom: 0;
  a {
    padding: 0.5rem 0;
    font-size: 16px;
    font-weight: 500;
    display: block;
    color: #222;
    text-decoration: none;
  }
`;

const BasicInfo = styled.p`
  margin: 0;
  color: #666;
`;

function Article(props) {
  const { title, url, point, postTime, commentCount, user, order } = props;
  return (
    <ArticleWrapper>
      <Title>
        <a href={url}>
          {order} - {title}
        </a>
      </Title>
      <BasicInfo>
        {point} {messages.pointBy}
        <span>{user}</span>
        <span> | </span>
        <span>
          {commentCount} {messages.comment}
        </span>
      </BasicInfo>
    </ArticleWrapper>
  );
}

export default Article;
