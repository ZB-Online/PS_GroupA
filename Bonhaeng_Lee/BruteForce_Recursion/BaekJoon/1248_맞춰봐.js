// sol1. DFS
const solution = function (i) {
  const [N, signs] = i
    .toString()
    .trim()
    .split('\n')
    .map((input, i) => (i === 0 ? +input : input));
  const cmp = [...Array(N)].map(() => [...Array(N)].fill(0));
  const arr = [...Array(21)];
  let isFound = false;

  const isPromising = (cnt, sum) => {
    for (let i = 0; i <= cnt; i++) {
      // cmp[0][cnt]~cmp[cnt][cnt]까지 열 1개 확인
      if (cmp[i][cnt] === '+' && sum <= 0) return false;
      if (cmp[i][cnt] === '-' && sum >= 0) return false;
      if (cmp[i][cnt] === '0' && sum !== 0) return false;
      sum -= arr[i];
    }
    return true;
  };

  const backtracking = (cnt, sum) => {
    if (cnt === N) {
      isFound = true;
      return;
    }
    for (let i = -10; i <= 10 && !isFound; i++) {
      arr[cnt] = i; // arr 배열에 i 입력
      if (isPromising(cnt, sum + i)) backtracking(cnt + 1, sum + i);
    }
  };

  let pos = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) cmp[i][j] = signs[pos++];
  }
  backtracking(0, 0);
};

test('TC1', () => {
  expect(
    solution(`4
-+0++++--+`)
  ).toStrictEqual(`-2 5 -3 1`);
});
