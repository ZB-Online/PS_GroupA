const solution = function (i) {
  const [N, K] = i.toString().trim().split(' ').map(Number);
  const DP = Array(K + 1)
    .fill(1)
    .map(() => Array(N + 1).fill(1));

  for (let i = 1; i <= K; i++) {
    DP[i][0] = 1;
  }

  const DIV = 1_000_000_000;
  for (let i = 2; i <= K; i++) {
    for (let j = 1; j <= N; j++) {
      DP[i][j] = DP[i - 1][j] + DP[i][j - 1];
      DP[i][j] %= DIV;
    }
  }

  console.log(DP[K][N]);
  return DP[K][N];
};

describe('합분해', () => {
  it('TC1', () => {
    expect(solution(`20 2`)).toStrictEqual(21);
  });
  it('TC2', () => {
    expect(solution(`6 4`)).toStrictEqual(84);
  });
});
