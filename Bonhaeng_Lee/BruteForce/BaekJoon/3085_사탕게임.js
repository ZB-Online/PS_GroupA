const solution = function (i) {
  const [N, ...graph] = i
    .toString()
    .trim()
    .split(/\s/)
    .map((v, i) => (i === 0 ? +v : v.split('')));

  function checkRow(x) {
    let count = 1;
    let max = 1;
    let candy = graph[x][0];

    for (let i = 1; i < N; i++) {
      if (graph[x][i] !== candy) {
        candy = graph[x][i];
        max = Math.max(max, count);
        count = 1;
      } else {
        count++;
      }
    }

    return Math.max(max, count);
  }

  function checkCol(y) {
    let count = 1;
    let max = 1;
    let candy = graph[0][y];

    for (let i = 1; i < N; i++) {
      if (graph[i][y] !== candy) {
        candy = graph[i][y];
        max = Math.max(max, count);
        count = 1;
      } else {
        count++;
      }
    }

    return Math.max(max, count);
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < N; i++) {
    max = Math.max(max, checkRow(i), checkCol(i));
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (j + 1 < N) {
        // 왼쪽 오른쪽 바꾸기
        [graph[i][j], graph[i][j + 1]] = [graph[i][j + 1], graph[i][j]];
        max = Math.max(max, checkRow(i));
        max = Math.max(max, checkCol(j));
        max = Math.max(max, checkCol(j + 1));
        [graph[i][j], graph[i][j + 1]] = [graph[i][j + 1], graph[i][j]];
      }
      if (i + 1 < N) {
        // 위 아래 바꾸기
        [graph[i][j], graph[i + 1][j]] = [graph[i + 1][j], graph[i][j]];
        max = Math.max(max, checkRow(i));
        max = Math.max(max, checkRow(i + 1));
        max = Math.max(max, checkCol(j));
        [graph[i][j], graph[i + 1][j]] = [graph[i + 1][j], graph[i][j]];
      }
    }
  }
  console.log(max);
  return max;
};

describe('사탕게임', () => {
  it('TC1', () => {
    expect(
      solution(`3
CCP
CCP
PPC`)
    ).toStrictEqual(3);
  });
  it('TC2', () => {
    expect(
      solution(`4
PPPP
CYZY
CCPY
PPCC`)
    ).toStrictEqual(4);
  });
  it('TC3', () => {
    expect(
      solution(`5
YCPZY
CYZZP
CCPPP
YCYZC
CPPZZ`)
    ).toStrictEqual(4);
  });
});
