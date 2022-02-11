const solution = function (i) {
  const N = i.toString().trim() * 1;
  const DP = Array(N + 1)
    .fill(0)
    .map(() => Array(10).fill(0));

  DP[1][0] = 1;
  DP[1][1] = 1;
  DP[1][2] = 1;
  DP[1][3] = 1;
  DP[1][4] = 1;
  DP[1][5] = 1;
  DP[1][6] = 1;
  DP[1][7] = 1;
  DP[1][8] = 1;
  DP[1][9] = 1;
  const DIV = 10_007;
  for (let i = 2; i <= N; i++) {
    for (let j = 0; j <= 9; j++) {
      DP[i][j] =
        DP[i - 1].reduce((acc, cur, idx) => (idx <= j ? acc + cur : acc), 0) %
        DIV;
    }
  }
  console.log(DP[N].reduce((acc, cur) => acc + cur, 0) % DIV);
  return DP[N].reduce((acc, cur) => acc + cur, 0) % DIV;
};

describe('동물원', () => {
  it('TC1', () => {
    expect(solution(`1`)).toStrictEqual(10);
  });
  it('TC2', () => {
    expect(solution(`2`)).toStrictEqual(55);
  });
  it('TC3', () => {
    expect(solution(`3`)).toStrictEqual(220);
  });
});
