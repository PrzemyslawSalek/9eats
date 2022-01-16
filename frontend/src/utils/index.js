const formatCash = (amount, integer = false, currency = "PLN") => {
  if ((amount || amount === 0) && !isNaN(amount)) {
    if (integer && parseInt(amount, 10) === parseFloat(amount)) {
      return `${parseInt(amount, 10)} ${currency}`.replace(/\./g, ",");
    }
    return `${Number.parseFloat(amount).toFixed(2)} ${currency}`.replace(/\./g, ",");
  }
  return false;
};

export { formatCash };
