function solution(i) {
  const N = i.toString().trim() * 1;
  const DP = Array.from({ length: N + 1 }, () => 0);
  DP[1] = 1;
  DP[2] = 2;
  for (let i = 3; i <= N; i++) {
    DP[i] = (DP[i - 1] + DP[i - 2]) % 10007;
  }

  console.log(DP[N]);
  return DP[N];
}

describe('2xn 타일링', () => {
  it('TC1', () => {
    expect(solution(`2`)).toStrictEqual(2);
  });
  it('TC2', () => {
    expect(solution(`9`)).toStrictEqual(55);
  });
});
