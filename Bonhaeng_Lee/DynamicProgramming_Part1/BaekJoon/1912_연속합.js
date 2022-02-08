const solution = function (i) {
  const [N, ...A] = i.toString().trim().split(/\s+/).map(Number);
  const DP = Array(N + 1).fill(0);
  [DP[0]] = A;

  let max = DP[0];
  for (let i = 1; i < N; i++) {
    DP[i] = Math.max(DP[i - 1] + A[i], A[i]);
    if (DP[i] > max) max = DP[i];
  }

  console.log(max);
  return max;
};

describe('연속합', () => {
  it('TC1', () => {
    expect(
      solution(`10
10 -4 3 1 5 6 -35 12 21 -1`)
    ).toStrictEqual(33);
  });
  it('TC2', () => {
    expect(
      solution(`10
2 1 -4 3 4 -4 6 5 -5 1`)
    ).toStrictEqual(14);
  });
  it('TC3', () => {
    expect(
      solution(`5
-1 -2 -3 -4 -5`)
    ).toStrictEqual(-1);
  });
});
