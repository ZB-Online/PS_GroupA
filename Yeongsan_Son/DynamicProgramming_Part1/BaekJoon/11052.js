function sol(s) {
  const input = s.toString().trim().split('\n');
  const N = +input[0];
  const cards = input[1].split(' ').map(Number);

  const dp = Array.from({ length: cards.length + 1 }, () => 0);

  // console.log(dp);

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + cards[j - 1]);
    }
  }

  return dp[N];
}

test('TC1', () => {
  expect(
    sol(`4
1 5 6 7`)
  ).toStrictEqual(10);
});
test('TC2', () => {
  expect(
    sol(`5
10 9 8 7 6`)
  ).toStrictEqual(50);
});
test('TC3', () => {
  expect(
    sol(`10
1 1 2 3 5 8 13 21 34 55`)
  ).toStrictEqual(55);
});
test('TC4', () => {
  expect(
    sol(`10
5 10 11 12 13 30 35 40 45 47`)
  ).toStrictEqual(50);
});
test('TC4', () => {
  expect(
    sol(`10
5 10 11 12 13 30 35 40 45 47`)
  ).toStrictEqual(50);
});
test('TC5', () => {
  expect(
    sol(`4
5 2 8 10`)
  ).toStrictEqual(20);
});
test('TC6', () => {
  expect(
    sol(`4
3 5 15 16`)
  ).toStrictEqual(18);
});
