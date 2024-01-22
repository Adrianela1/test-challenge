
const filterDNA = (dnaString) => {
    return dnaString
      .split('')
      .filter((base) => ['C', 'T', 'A', 'G'].includes(base.toUpperCase()))
      .join('');
  };
  module.exports = { ffilterDNA }