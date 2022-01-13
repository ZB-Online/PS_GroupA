const solution = function (i) {
  const [[N, M, K], ...grid] = i
    .toString()
    .trim()
    .split('\n')
    .map(input => input.split(' ').map(Number));

  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const isAdjacent = (x, y) => {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && visited[nx][ny]) {
        return false;
      }
    }
    return true;
  };

  let result = Number.MIN_SAFE_INTEGER;
  const DFS = (sum, depth) => {
    if (depth === K) {
      result = Math.max(sum, result);
      return;
    }
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (!visited[i][j] && isAdjacent(i, j)) {
          visited[i][j] = true;
          DFS(sum + grid[i][j], depth + 1);
          visited[i][j] = false;
        }
      }
    }
  };

  DFS(0, 0);
  // BOJ 제출
  console.log(result);
  return result;
};

test('TC1', () => {
  expect(
    solution(`1 1 1
1`)
  ).toStrictEqual(1);
});
test('TC2', () => {
  expect(
    solution(`2 2 2
1 2
3 4`)
  ).toStrictEqual(5);
});
test('TC3', () => {
  expect(
    solution(`2 2 2
5 4
4 5`)
  ).toStrictEqual(10);
});
test('TC4', () => {
  expect(
    solution(`5 5 3
1 9 8 -2 0
-1 9 8 -3 0
-5 1 9 -1 0
0 0 0 9 8
9 9 9 0 0`)
  ).toStrictEqual(27);
});
