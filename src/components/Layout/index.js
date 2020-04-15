import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header';
import { GlobalStyles } from '../../styles/global';
import * as S from './styles';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <GlobalStyles />
      <S.LayoutWrapper>
        <S.Main>{children}</S.Main>
        <S.Footer>
          © {new Date().getFullYear()},
          <a href="https://github.com/igorsouza-dev/">Igor Souza</a>
        </S.Footer>
      </S.LayoutWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
