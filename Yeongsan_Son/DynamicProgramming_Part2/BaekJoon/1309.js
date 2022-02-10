function sol(s) {
  const N = +s.toString().trim();
  const dp = [1, 3];
  for (let i = 2; i <= N; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
  }

  console.log(dp);
  return dp[N];
}

test('TC1', () => {
  expect(sol('4')).toStrictEqual(41);
});
