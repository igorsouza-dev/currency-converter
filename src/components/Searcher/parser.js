export const formatNumber = (number, currency) => {
  let value = parseNumber(number);
  return new Intl.NumberFormat('us-EN', {
    style: 'currency',
    currency,
  }).format(value);
};

export const parseNumber = string => {
  let number = `${string}`.replace(/\./g, '');
  number = number.replace(/,/g, '.');
  number = number.replace(/^\D+/g, '');
  let parsedValue = parseFloat(number);
  if (!parsedValue) {
    parsedValue = 0;
  }
  return parsedValue;
};
