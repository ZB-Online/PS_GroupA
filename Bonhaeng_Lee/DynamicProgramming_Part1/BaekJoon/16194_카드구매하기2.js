const solution = function (i) {
  const [N, ...Pack] = i.toString().trim().split(/\s/).map(Number);

  const DP = [0, ...Pack];
  for (let i = 2; i <= N; i++) {
    // 범위 제한으로 중복 연산 제거
    for (let j = 1; j <= i / 2; j++) {
      DP[i] = Math.min(DP[i], DP[j] + DP[i - j]);
    }
  }
  console.log(DP[N]);
  return DP[N];
};

describe('카드 구매하기 2', () => {
  it('TC1', () => {
    expect(
      solution(`4
1 5 6 7`)
    ).toStrictEqual(4);
  });
  it('TC2', () => {
    expect(
      solution(`5
10 9 8 7 6`)
    ).toStrictEqual(6);
  });
  it('TC3', () => {
    expect(
      solution(`10
1 1 2 3 5 8 13 21 34 55`)
    ).toStrictEqual(5);
  });
  it('TC4', () => {
    expect(
      solution(`10
5 10 11 12 13 30 35 40 45 47`)
    ).toStrictEqual(26);
  });
  it('TC5', () => {
    expect(
      solution(`4
5 2 8 10`)
    ).toStrictEqual(4);
  });
  it('TC6', () => {
    expect(
      solution(`4
3 5 15 16`)
    ).toStrictEqual(10);
  });
});
