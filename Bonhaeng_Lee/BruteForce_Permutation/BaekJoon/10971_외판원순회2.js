const solution = function (i) {
  const [N, ...A] = i
    .toString()
    .trim()
    .split('\n')
    .map((v, i) => (i === 0 ? +v : v.split(' ').map(Number)));
  const visit = [...Array(N)].fill(false);

  const getSum = arr => {
    let sum = 0;
    for (let i = 0; i < N - 1; i++) {
      // A[arr[i]][arr[i+1] 접근했을 때 0이 나오면 길이 없는 것이므로 경로에서 제외
      if (A[arr[i]][arr[i + 1]] === 0) return Number.MAX_SAFE_INTEGER;
      sum += A[arr[i]][arr[i + 1]];
    }
    sum += A[arr[N - 1]][arr[0]];
    return sum;
  };

  let min = Number.MAX_SAFE_INTEGER;
  const permutation = (perm, L) => {
    if (L === N) {
      min = Math.min(min, getSum(perm));
      return;
    }
    for (let i = 0; i < N; i++) {
      if (!visit[i]) {
        visit[i] = true;
        perm[L] = i;
        permutation(perm, L + 1);
        visit[i] = false;
      }
    }
  };

  permutation([], 0);
  console.log(min);
  return min;
};

describe('외판원순회2', () => {
  it('TC1', () => {
    expect(
      solution(`4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`)
    ).toStrictEqual(35);
  });
  it('TC2', () => {
    expect(
      solution(`4
0 1 0 0
0 0 1 0
0 0 0 1
1 0 0 0`)
    ).toStrictEqual(4);
  });
  it('TC3', () => {
    expect(
      solution(`4
0 5 1 99
99 0 5 1
1 99 0 5
5 1 99 0`)
    ).toStrictEqual(20);
  });
});
