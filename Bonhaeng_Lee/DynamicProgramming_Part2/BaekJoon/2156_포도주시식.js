const solution = function (i) {
  const [N, ...W] = i.toString().trim().split(/\s+/).map(Number);
  const DP = Array(N + 1).fill(0);

  [DP[0]] = W;
  DP[1] = W[0] + W[1];
  DP[2] = Math.max(DP[1], W[0] + W[2], W[1] + W[2]);
  for (let i = 3; i < N; i++) {
    DP[i] = Math.max(DP[i - 1], DP[i - 2] + W[i], DP[i - 3] + W[i] + W[i - 1]);
  }

  console.log(DP[N - 1]);
  return DP[N - 1];
};

describe('포도주 시식', () => {
  it('TC1', () => {
    expect(
      solution(`6
6
10
13
9
8
1
`)
    ).toStrictEqual(33);
  });
});
