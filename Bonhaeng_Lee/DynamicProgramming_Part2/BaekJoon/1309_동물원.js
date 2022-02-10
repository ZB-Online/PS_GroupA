const solution = function (i) {
  const N = i.toString().trim() * 1;
  const DP = Array(N + 1)
    .fill(0)
    .map(() => Array(3).fill(0));

  DP[1][0] = 1;
  DP[1][1] = 1;
  DP[1][2] = 1;
  const DIV = 9901;
  for (let i = 2; i <= N; i++) {
    DP[i][0] = (DP[i - 1][0] + DP[i - 1][1] + DP[i - 1][2]) % DIV;
    DP[i][1] = (DP[i - 1][0] + DP[i - 1][2]) % DIV;
    DP[i][2] = (DP[i - 1][0] + DP[i - 1][1]) % DIV;
  }
  console.log((DP[N][0] + DP[N][1] + DP[N][2]) % DIV);
  return DP[N][0] + DP[N][1] + DP[N][2];
};

describe('동물원', () => {
  it('TC1', () => {
    expect(solution(`4`)).toStrictEqual(41);
  });
});
