const solution = function (i) {
  const [N, ...A] = i.toString().trim().split(/\s+/).map(Number);
  const DP = Array(N + 1).fill(1);

  const indices = Array(N + 1).fill(0);

  let maxIdx = 0;
  let max = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (A[j] < A[i] && DP[j] + 1 > DP[i]) {
        DP[i] = DP[j] + 1;
        indices[i] = j;
      }
    }

    if (DP[i] > max) {
      max = DP[i];
      maxIdx = i;
    }
  }

  let index = maxIdx;
  const ans = [];
  // maxIdx부터 부분 수열의 이전 인덱스를 찾아감, 50(5) -> 30(3) -> 20(1) -> 10(0)
  for (let i = max - 1; i >= 0; i--) {
    ans[i] = A[index];
    index = indices[index];
  }
  console.log(max + '\n' + ans.join(' '));

  return max + '\n' + ans.join(' ');
};

describe('가장 긴 증가하는 부분수열 4', () => {
  it('TC1', () => {
    expect(
      solution(`6
10 20 10 30 20 50`)
    ).toStrictEqual(`4
10 20 30 50`);
  });
});
