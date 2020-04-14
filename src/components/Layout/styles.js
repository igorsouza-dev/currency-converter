import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;
export const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  margin: 10px;

  a {
    text-decoration: none;
    color: #f7f6f3;
  }
`;
