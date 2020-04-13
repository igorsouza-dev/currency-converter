import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { ExchangeDollar } from '@styled-icons/remix-fill/ExchangeDollar';
import React from 'react';
import * as S from './styles';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#337191`,
      marginBottom: `1.45rem`,
      borderBottom: 'solid 1px #1A587B',
    }}
  >
    <S.HeaderWrapper
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <S.Title>
        <Link to="/">
          <ExchangeDollar color="#f7f6f3" size={36} />
          {siteTitle}
        </Link>
      </S.Title>
    </S.HeaderWrapper>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
