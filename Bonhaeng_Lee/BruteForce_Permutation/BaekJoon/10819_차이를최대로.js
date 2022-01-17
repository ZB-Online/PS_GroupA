const solution = function (i) {
  const [N, ...A] = i.toString().trim().split(/\s/).map(Number);
  const visit = [...Array(N)].fill(false);

  const getSum = arr => {
    let sum = 0;
    for (let i = 0; i < N - 1; i++) {
      sum += Math.abs(arr[i] - arr[i + 1]);
    }
    return sum;
  };

  let max = Number.MIN_SAFE_INTEGER;
  const permutation = (perm, L) => {
    if (L === N) {
      max = Math.max(max, getSum(perm));
      return;
    }
    for (let i = 0; i < N; i++) {
      if (!visit[i]) {
        visit[i] = true;
        perm[L] = A[i];
        permutation(perm, L + 1);
        visit[i] = false;
      }
    }
  };

  permutation([], 0);
  console.log(max);
  return max;
};

describe('차이를최대로', () => {
  it('TC1', () => {
    expect(
      solution(`6
20 1 15 8 4 10`)
    ).toStrictEqual(62);
  });
});
