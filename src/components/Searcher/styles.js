import styled from 'styled-components';
import Select from 'react-select';
import media from 'styled-media-query';
export const SearcherSelect = styled(Select)`
  width: 100px;
  font-family: 'Roboto Mono', monospace;
  color: #333;
`;
export const SearcherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 20px;
  width: 100%;
  padding: 5px 40px;
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 2rem 0rem;
  max-width: 400px;
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;

  svg {
    margin: 10px;
  }

  ${media.lessThan('large')`
    /*max-width: 400px;
    */
  `}
`;
export const SearcherButton = styled.button`
  height: 48px;
  padding: 5px;
  margin: 0 10px;
  background: #65a8c2;
  border-radius: 5px;
  width: 68px;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: background 0.5s ease-out;
  &:hover {
    background: #337191;
  }
`;

export const SearcherField = styled.input`
  font-size: 2rem;
  border: 0;
  outline: 0;
  color: #f7f6f3;
  background: #337191;
  width: 100%;
  max-width: 480px;
  padding: 5px;
  border-radius: 4px;
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;
  text-align: center;

  ${media.lessThan('small')`
    font-size: 1.5rem;
  `}
`;

export const ConvertedValueLabel = styled.p`
  font-size: 6rem;
  font-weight: bold;
  word-break: break-all;
  ${media.lessThan('large')`
    font-size: 4rem;
  `}
  ${media.lessThan('medium')`
    font-size: 3rem;
  `}
  ${media.lessThan('small')`
    font-size: 2rem;
  `}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 90px;

  p {
    color: #232323;

    a {
      text-decoration: underline;
      color: #ddd;
      font-weight: bold;
    }
  }
`;
