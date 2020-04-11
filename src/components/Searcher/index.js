import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import * as S from './styles';
import currencies from './currencies';

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
        setExchangeRates(response.data.rates);
        handleConversion(from, to);
      } catch (e) {}
    }
    getExchangeRates();
  }, [from]);

  function handleFromChange({ value }) {
    setFrom(value);
    handleConversion(value, to);
  }
  function handleToChange({ value }) {
    setTo(value);
    handleConversion(from, value);
  }
  function handleFromFieldChange({ target: { value } }) {
    setFromValue(value);
    handleConversion(from, to);
  }
  function handleToFieldChange({ target: { value } }) {
    setToValue(value);
    handleConversion(from, to);
  }
  function handleConversion(fromCurrency, toCurrency) {
    if (fromCurrency && toCurrency) {
      let converted = exchangeRates[toCurrency] * fromValue;
      setToValue(converted);
    }
  }
  return (
    <S.SearcherWrapper>
      <S.SearcherField value={fromValue} onChange={handleFromFieldChange} />
      <label htmlFor="from">From: </label>
      <S.SearcherSelect
        options={currenciesOptions}
        defaultValue={{ value: from, label: from }}
        onChange={handleFromChange}
      />
      <label htmlFor="to">To: </label>
      <S.SearcherSelect
        options={currenciesOptions}
        onChange={handleToChange}
        defaultValue={{ value: to, label: to }}
      />
      <S.SearcherField value={toValue} onChange={handleToFieldChange} />
    </S.SearcherWrapper>
  );
};

export default Searcher;
