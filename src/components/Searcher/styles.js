import styled from 'styled-components';
import Select from 'react-select';

export const SearcherSelect = styled(Select)`
  width: 100px;
  font-family: 'Roboto Mono', monospace;
  color: #333;
`;
export const SearcherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 460px;
  padding: 5px 40px;
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 2rem 0rem;
`;

export const SearcherButton = styled.button`
  height: 48px;
  padding: 5px;
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
  border-bottom: solid 1px #f7f6f3;
  width: 100%;
  margin-bottom: 20px;
  background: none;
  font-weight: 300;
  font-family: 'Roboto Mono', monospace;
  &:focus {
    border-bottom: solid 3px #fff;
  }
`;

export const ConvertedValueLabel = styled.p`
  margin-top: 3rem;
  font-size: 5rem;
  font-weight: bold;
`;
