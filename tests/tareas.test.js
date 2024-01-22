// tareas.test.js
const { fizzBuzz, filterDNA, calculateFactorial } = require('./tareas');

// a. Pruebas para la función FizzBuzz
test('FizzBuzz returns Fizz for multiples of 3', () => {
  expect(fizzBuzz(3)).toBe('Fizz');
  expect(fizzBuzz(9)).toBe('Fizz');
});

test('FizzBuzz returns Buzz for multiples of 5', () => {
  expect(fizzBuzz(5)).toBe('Buzz');
  expect(fizzBuzz(25)).toBe('Buzz');
});

test('FizzBuzz returns FizzBuzz for multiples of 3 and 5', () => {
  expect(fizzBuzz(15)).toBe('FizzBuzz');
  expect(fizzBuzz(30)).toBe('FizzBuzz');
});

test('FizzBuzz returns the original number for other cases', () => {
  expect(fizzBuzz(7)).toBe(7);
  expect(fizzBuzz(8)).toBe(8);
});

// b. Pruebas para la función de Filtro de cadena de ADN
test('FilterDNA removes non-canonical bases and is case-sensitive', () => {
  expect(filterDNA('CTAGGGTA')).toBe('CTAGGGTA');
  expect(filterDNA('acgtACGT')).toBe('ACGTACGT');
  expect(filterDNA('CGTBNX')).toBe('CGT');
});

test('FilterDNA returns an empty string for an empty input', () => {
  expect(filterDNA('')).toBe('');
});

// c. Pruebas para la función de Cálculo factorial
test('CalculateFactorial calculates factorial recursively', () => {
  expect(calculateFactorial(0)).toBe(1);
  expect(calculateFactorial(1)).toBe(1);
  expect(calculateFactorial(5)).toBe(120);
});

// Puedes agregar más casos de prueba según sea necesario
