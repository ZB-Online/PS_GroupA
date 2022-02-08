function sol(s) {
  const N = +s.toString().trim();
  let answer = 0;

  for (let i = 1; i <= N; i++) {
    answer += Math.floor(N / i) * i;
  }

  return answer;
}

test('TC1', () => {
  expect(sol('1')).toStrictEqual(1);
});
test('TC2', () => {
  expect(sol('2')).toStrictEqual(4);
});
test('TC3', () => {
  expect(sol('10')).toStrictEqual(87);
});
test('TC4', () => {
  expect(sol('70')).toStrictEqual(4065);
});
test('TC5', () => {
  expect(sol('10000')).toStrictEqual(82256014);
});
