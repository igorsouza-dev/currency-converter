import React, { useState } from 'react';
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

  async function handleFromChange({ value }) {
    setFrom(value);
    try {
      const response = await api.get(`/latest?base=${value}`);
      setExchangeRates(response.data.rates);
      handleConversion();
    } catch (e) {}
  }
  function handleToChange({ value }) {
    setTo(value);
    handleConversion();
  }
  function handleConversion() {
    if (from && to) {
      let converted = exchangeRates[to] * fromValue;
      console.log(exchangeRates, to);
      setToValue(converted);
    }
  }
  return (
    <S.SearcherWrapper>
      <S.SearcherField
        value={fromValue}
        onChange={e => setFromValue(e.target.value)}
      />
      <label htmlFor="from">From: </label>
      <S.SearcherSelect
        options={currenciesOptions}
        value={{ value: from, label: from }}
        onChange={handleFromChange}
      />
      <label htmlFor="to">To: </label>
      <S.SearcherSelect
        options={currenciesOptions}
        onChange={handleToChange}
        value={{ value: to, label: to }}
      />
      <S.SearcherField
        value={toValue}
        onChange={e => setToValue(e.target.value)}
      />
    </S.SearcherWrapper>
  );
};

export default Searcher;
