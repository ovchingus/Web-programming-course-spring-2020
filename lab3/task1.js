const ITMO_BORN_YEAR = 1990;
const ITMO_BORN_MONTH = 3;
const ITMO_BORN_DAY = 26;

// Допишите код здесь, чтобы программа вывела на консоль ожидаемый результат
const mapDate = (y, m, d) => ({
  year: y,
  month: m - 1,
  day: d,
});

const date = mapDate(ITMO_BORN_YEAR, ITMO_BORN_MONTH, ITMO_BORN_DAY)
const itmoBornDate = new Date(date.year, date.month, date.day);

console.log('Task 1');
console.log('expected: Mon Mar 26 1990');
console.log(`get: ${itmoBornDate.toDateString()}`); // Mon Mar 26 1990
