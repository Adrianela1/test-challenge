const calculateFactorial = (number) => {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * calculateFactorial(number - 1);
    }
  };
  module.exports = {calculateFactorial}