import styled from 'styled-components';
import Select from 'react-select';
export const SearcherSelect = styled(Select)`
  width: 100px;
`;
export const SearcherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearcherButton = styled.button`
  height: 48px;
  padding: 5px;
  background: #6d6d6d;
  border-radius: 5px;
`;

export const SearcherField = styled.input`
  height: 25px;
  background: #ddd;
  font-size: 1.5rem;
  border-bottom: solid 1px #4d4d4d;
`;

export const ConvertedValueLabel = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;
