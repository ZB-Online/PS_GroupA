const solution = function (i) {
  const N = i.toString().trim() * 1;
  const DP = Array.from({ length: N + 1 }, () => 0);

  DP[1] = 1;
  DP[2] = 3;
  for (let i = 3; i <= N; i++) {
    DP[i] = (DP[i - 1] + 2 * DP[i - 2]) % 10007;
  }

  console.log(DP[N]);
  return DP[N];
};

describe('2xn 타일링 2', () => {
  it('TC1', () => {
    expect(solution(`2`)).toStrictEqual(3);
  });
  it('TC2', () => {
    expect(solution(`8`)).toStrictEqual(171);
  });
  it('TC3', () => {
    expect(solution(`12`)).toStrictEqual(2731);
  });
});
