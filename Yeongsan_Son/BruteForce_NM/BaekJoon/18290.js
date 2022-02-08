const sol = function (i) {
  const [NMK, ...arr] = i.toString().trim().split('\n');
  const [N, M, K] = NMK.split(' ').map(el => +el);
  const grid = arr.map(el => el.split(' ').map(el => +el));

  let checked = Array.from({ length: N }, () => Array(M).fill(false));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const checkNext = (row, col) => {
    for (let i = 0; i < 4; i++) {
      const nx = row + dx[i];
      const ny = col + dy[i];

      const invalidRow = nx < 0 || nx >= N;
      const invalidCol = ny < 0 || ny >= M;

      if (!invalidRow && !invalidCol && checked[nx][ny]) {
        return true;
      }
    }
    return false;
  };

  let max = Number.MIN_SAFE_INTEGER;

  const res = [];

  const dfs = (row, col, cnt, sum) => {
    if (cnt === K) {
      max = Math.max(sum, max);
      return;
    }

    for (let i = row; i < N; i++) {
      // row
      for (let j = col; j < M; j++) {
        // col
        if (!checked[i][j]) {
          if (!checkNext(i, j)) {
            checked[i][j] = true;
            res.push(grid[i][j]);
            dfs(row, col, cnt + 1, sum + grid[i][j]);
            res.pop();
            checked[i][j] = false;
          }
        }
      }
    }
  };

  dfs(0, 0, 0, 0);

  return max;
};

test('TC1', () => {
  expect(
    sol(`1 1 1
1`)
  ).toStrictEqual(1);
});

test('TC2', () => {
  expect(
    sol(`2 2 2
1 2
3 4`)
  ).toStrictEqual(5);
});

test('TC3', () => {
  expect(
    sol(`2 2 2
5 4
4 5`)
  ).toStrictEqual(10);
});

test('TC4', () => {
  expect(
    sol(`5 5 3
1 9 8 -2 0
-1 9 8 -3 0
-5 1 9 -1 0
0 0 0 9 8
9 9 9 0 0`)
  ).toStrictEqual(27);
});
