function sol(str) {
  const [E, S, M] = str.toString().trim().split(' ').map(Number);

  let date = 1;

  while (true) {
    if ((date - E) % 15 === 0 && (date - S) % 28 === 0 && (date - M) % 19 === 0) return date;

    date++;
  }
}

test('TC1', () => {
  expect(sol('1 16 16')).toStrictEqual(16);
});
test('TC2', () => {
  expect(sol('1 1 1')).toStrictEqual(1);
});
test('TC3', () => {
  expect(sol('1 2 3')).toStrictEqual(5266);
});
test('TC4', () => {
  expect(sol('15 28 19')).toStrictEqual(7980);
});
