const solution = function (i) {
  const N = i.toString().trim() * 1;
  const DP = Array(N + 1)
    .fill(0)
    .map(() => Array(10).fill(0));
  for (let i = 1; i <= 9; i++) {
    DP[1][i] = 1;
  }

  for (let i = 2; i <= N; i++) {
    for (let j = 0; j <= 9; j++) {
      if (j === 0) {
        DP[i][j] = (DP[i - 1][j - 1] + DP[i - 1][j + 1]) % 1000000000;
      }
    }
  }
  const result = DP[N].reduce((a, b) => a + b, 0) % 1000000000;
  console.log(result);
  return result;
};

describe('연속합', () => {
  it('TC1', () => {
    expect(solution(`1`)).toStrictEqual(9);
  });
  it('TC2', () => {
    expect(solution(`2`)).toStrictEqual(17);
  });
});
