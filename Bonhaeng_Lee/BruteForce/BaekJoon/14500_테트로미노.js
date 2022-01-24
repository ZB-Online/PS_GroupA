const solution = function (i) {
  const [[N, M], ...matrix] = i
    .toString()
    .trim()
    .split('\n')
    .map((v, i) =>
      i === 0 ? v.split(' ').map(Number) : v.split(' ').map(v => +v)
    );

  let result = Number.MIN_SAFE_INTEGER;
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  function DFS(y, x, cnt, sum, visit) {
    if (cnt >= 4) {
      result = Math.max(result, sum);
      return;
    }

    for (let k = 0; k < 4; k++) {
      const ny = y + dy[k];
      const nx = x + dx[k];

      if (!(ny < 0 || nx < 0 || ny >= N || nx >= M || visit[ny][nx])) {
        visit[ny][nx] = true;
        DFS(ny, nx, cnt + 1, sum + matrix[ny][nx], visit);
        visit[ny][nx] = false;
      }
    }
  }

  function checkEdgeCaseSum(y, x) {
    // ㅏ
    if (y + 2 < N && x + 1 < M)
      result = Math.max(
        result,
        matrix[y][x] +
          matrix[y + 1][x] +
          matrix[y + 2][x] +
          matrix[y + 1][x + 1]
      );
    // ㅓ
    if (y + 2 < N && x - 1 > 0)
      result = Math.max(
        result,
        matrix[y][x] +
          matrix[y + 1][x] +
          matrix[y + 2][x] +
          matrix[y + 1][x - 1]
      );
    // ㅗ
    if (y + 1 < N && x + 2 < M)
      result = Math.max(
        result,
        matrix[y][x] +
          matrix[y][x + 1] +
          matrix[y][x + 2] +
          matrix[y + 1][x + 1]
      );
    // ㅜ
    if (y > 0 && x + 2 < M)
      result = Math.max(
        result,
        matrix[y][x] +
          matrix[y][x + 1] +
          matrix[y][x + 2] +
          matrix[y - 1][x + 1]
      );
  }

  const visit = new Array(N).fill(false).map(() => new Array(M).fill(false));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      visit[i][j] = true;
      DFS(i, j, 1, matrix[i][j], visit);
      visit[i][j] = false;
      checkEdgeCaseSum(i, j);
    }
  }

  console.log(result);
  return result;
};

describe('테트로미노', () => {
  it('TC1', () => {
    expect(
      solution(`5 5
1 2 3 4 5
5 4 3 2 1
2 3 4 5 6
6 5 4 3 2
1 2 1 2 1`)
    ).toStrictEqual(19);
  });
  it('TC2', () => {
    expect(
      solution(`4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5`)
    ).toStrictEqual(20);
  });
  it('TC3', () => {
    expect(
      solution(`4 10
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1`)
    ).toStrictEqual(7);
  });
});
