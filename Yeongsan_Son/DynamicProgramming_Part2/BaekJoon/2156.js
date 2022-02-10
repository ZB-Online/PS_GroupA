function sol(s) {
  const [N, ...wines] = s.toString().trim().split('\n').map(Number);
  console.log(N, wines);
  const dp = [0, wines[0], wines[0] + wines[1], ...Array.from({ length: N - 3 }, () => 0)];
  for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(dp[i - 3] + wines[i - 2] + wines[i - 1], dp[i - 2] + wines[i - 1], dp[i - 1]);
  }
  return dp[N];
}

test('TC1', () => {
  expect(
    sol(`6
6
10
13
9
8
1`)
  ).toStrictEqual(33);
});
