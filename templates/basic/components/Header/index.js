import React from 'react';

import styled from 'styled-components';

import messages from './messages';

const HeaderWrapper = styled.header`
  padding: 5px 10px;
  background-color: #222;
  color: #fff;
  line-height: 0;
  height: 42px;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Li = styled.li`
  display: table-cell;
  vertical-align: middle;
  padding-right: 10px;
`;

const Title = styled.h2`
  font-size: 16px;
  margin: 0;
`;

function Header() {
  return (
    <HeaderWrapper>
      <nav>
        <Ul>
          <Li>
            <a href="/">
              <img src="/static/img/logo.png" alt={messages.hn} />
            </a>
          </Li>
          <Li>
            <Title>{messages.hn}</Title>
          </Li>
        </Ul>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
