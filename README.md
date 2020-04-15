# Currency Converter

<div align="center">
  <img src="/demo.gif" />
</div>

## Overview

A simple currency converter PWA made with Gatsby.js and React.js that uses a free public API to fetch the current exchange rates and convert the informed amount to the desired currency.

## The Exchange Rates API

A very simple API that offers a lot of information with a simple request:

```javascript
GET https://api.exchangeratesapi.io/latest HTTP/1.1

{
  "base": "EUR",
  "date": "2018-04-08",
  "rates": {
    "CAD": 1.565,
    "CHF": 1.1798,
    "GBP": 0.87295,
    "SEK": 10.2983,
    "EUR": 1.092,
    "USD": 1.2234,
    ...
  }
}
```

Check it out their website: [https://exchangeratesapi.io/](https://exchangeratesapi.io/).

## License

This is a open-sourced software licensed under the [MIT license](LICENSE.md).
