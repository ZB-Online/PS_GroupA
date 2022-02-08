function sol(s) {
  const [N, arr] = s
    .toString()
    .trim()
    .split('\n')
    .map((el, idx) => (idx === 0 ? +el : el.split(' ').map(Number)));

  const dp = [arr[0], ...Array.from({ length: arr.length - 1 }, () => 0)];

  for (let i = 1; i < N; i++) {
    dp[i] = arr[i] > arr[i] + dp[i - 1] ? arr[i] : arr[i] + dp[i - 1];
  }

  console.log(dp);
  return Math.max(...dp);
}

test('TC1', () => {
  expect(
    sol(`10
10 -4 3 1 5 6 -35 12 21 -1`)
  ).toStrictEqual(33);
});
test('TC2', () => {
  expect(
    sol(`10
2 1 -4 3 4 -4 6 5 -5 1`)
  ).toStrictEqual(14);
});
test('TC3', () => {
  expect(
    sol(`5
-1 -2 -3 -4 -5`)
  ).toStrictEqual(-1);
});
test('TC4', () => {
  expect(
    sol(`5
-1 -2 1 -4 -5`)
  ).toStrictEqual(1);
});
test('TC4', () => {
  expect(
    sol(`5
-1 10 1 -4 -5`)
  ).toStrictEqual(11);
});
