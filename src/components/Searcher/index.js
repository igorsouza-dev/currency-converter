import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import * as S from './styles';
import currencies from './currencies';
import { ExchangeAlt } from '@styled-icons/fa-solid/ExchangeAlt';
const Searcher = () => {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('BRL');
  const [fromValue, setFromValue] = useState(1);
  const [toValue, setToValue] = useState(0);
  const [exchangeRates, setExchangeRates] = useState({});

  const currenciesOptions = currencies.map(currency => ({
    value: currency,
    label: currency,
  }));

  useEffect(() => {
    async function getExchangeRates() {
      try {
        const response = await api.get(`/latest?base=${from}`);
        const { rates } = response.data;
        setExchangeRates(rates);
        if (to && fromValue) {
          setToValue(convert(rates[to], fromValue));
        }
      } catch (e) {}
    }
    getExchangeRates();
  }, [from]);

  function handleFromChange({ value }) {
    setFrom(value);
  }
  function handleToChange({ value }) {
    setTo(value);
    if (fromValue) {
      setToValue(convert(exchangeRates[value], fromValue));
    }
  }
  function handleFromFieldChange({ target: { value } }) {
    setFromValue(value);
    setToValue(convert(exchangeRates[to], value));
  }
  function convert(a, b) {
    let converted = parseFloat(a) * parseFloat(b);
    return converted.toFixed(2);
  }
  function switchCurrency() {
    let aux = from;
    setFrom(to);
    setTo(aux);
  }
  return (
    <S.SearcherWrapper>
      <S.SearcherField value={fromValue} onChange={handleFromFieldChange} />
      <S.FieldsContainer>
        <S.SearcherSelect
          options={currenciesOptions}
          defaultValue={{ value: from, label: from }}
          value={{ value: from, label: from }}
          onChange={handleFromChange}
        />
        <S.SearcherButton onClick={switchCurrency}>
          <ExchangeAlt size={24} color="#f7f6f3" />
        </S.SearcherButton>
        <S.SearcherSelect
          options={currenciesOptions}
          onChange={handleToChange}
          value={{ value: to, label: to }}
          defaultValue={{ value: to, label: to }}
        />
      </S.FieldsContainer>

      <S.ConvertedValueLabel>{toValue}</S.ConvertedValueLabel>
    </S.SearcherWrapper>
  );
};

export default Searcher;
