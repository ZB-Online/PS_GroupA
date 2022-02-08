const solution = function (i) {
  const [N, ...A] = i.toString().trim().split(/\s+/).map(Number);
  const DP = Array(N + 1).fill(1);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (A[j] < A[i] && DP[j] + 1 > DP[i]) {
        DP[i] = DP[j] + 1;
      }
    }
  }

  console.log(Math.max(...DP));
  return Math.max(...DP);
};

describe('가장 긴 증가하는 부분수열', () => {
  it('TC1', () => {
    expect(
      solution(`6
10 20 10 30 20 50`)
    ).toStrictEqual(4);
  });
});
