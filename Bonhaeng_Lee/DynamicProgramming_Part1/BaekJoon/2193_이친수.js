const solution = function (i) {
  const N = i.toString().trim() * 1;
  const DP = Array(N + 1).fill(1);

  DP[0] = 1;
  DP[1] = 1;
  for (let i = 2; i <= N; i++) {
    DP[i] = BigInt(DP[i - 2]) + BigInt(DP[i - 1]);
  }
  console.log(DP[N - 1].toString());
  return DP[N - 1].toString();
};

describe('이친수', () => {
  it('TC1', () => {
    expect(solution(`3`)).toStrictEqual('2');
  });
});
