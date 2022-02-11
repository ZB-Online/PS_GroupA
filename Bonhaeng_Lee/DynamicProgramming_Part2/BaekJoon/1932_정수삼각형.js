const solution = function (i) {
  const [N, ...T] = i
    .toString()
    .trim()
    .split('\n')
    .map((v, idx) => (idx === 0 ? +v : v.split(' ').map(Number)));
  const DP = T.map(v => v.slice());

  for (let i = 1; i < N; i++) {
    const len = DP[i].length;

    for (let j = 0; j < len; j++) {
      if (j === 0) DP[i][j] += DP[i - 1][j];
      else if (j === len - 1) DP[i][j] += DP[i - 1][j - 1];
      else DP[i][j] += Math.max(DP[i - 1][j - 1], DP[i - 1][j]);
    }
  }
  console.log(Math.max(...DP[N - 1]));
  return Math.max(...DP[N - 1]);
};

describe('정수삼각형', () => {
  it('TC1', () => {
    expect(
      solution(`5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`)
    ).toStrictEqual(30);
  });
});
