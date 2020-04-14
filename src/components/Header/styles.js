import styled from 'styled-components';
import media from 'styled-media-query';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  a {
    text-decoration: none;
    color: #f7f6f3;

    svg {
      margin-right: 10px;
    }
  }
  ${media.lessThan('small')`
    font-size: 1.5rem;
  `}
`;
