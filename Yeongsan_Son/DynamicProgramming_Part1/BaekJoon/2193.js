// https://leylaoriduck.tistory.com/523

function sol(s) {
  const N = +s.toString();

  const dp = [0, 1, 1];

  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[N];
}

describe('이친수', () => {
  it('N이 3일때, 이친수의 개수', () => {
    expect(sol('3')).toStrictEqual(2);
  });
  it('N이 4일때, 이친수의 개수', () => {
    expect(sol('4')).toStrictEqual(3);
  });
  it('N이 5일때, 이친수의 개수', () => {
    expect(sol('5')).toStrictEqual(5);
  });
  it('N이 6일때, 이친수의 개수', () => {
    expect(sol('6')).toStrictEqual(8);
  });
});
