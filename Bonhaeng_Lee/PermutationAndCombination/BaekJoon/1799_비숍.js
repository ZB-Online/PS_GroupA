const solution = function (i) {
  const [SIZE, ...arr] = i.toString().trim().split('\n');
  const board = arr.map(v => v.split(' ').map(Number));
  const bishop = [...Array(10)].map(() => [...Array(10).fill(false)]);
  const possibleArea = [];
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (board[i][j]) possibleArea.push([i, j]);
    }
  }

  function isPossible(x, y) {
    // 왼쪽 위 대각선
    let nx = x - 1;
    let ny = y - 1;
    while (nx >= 0 && ny >= 0) {
      if (bishop[nx][ny]) return false;
      nx--;
      ny--;
    }
    // 오른쪽 위 대각선
    nx = x - 1;
    ny = y + 1;
    while (nx >= 0 && ny < SIZE) {
      if (bishop[nx][ny]) return false;
      nx--;
      ny++;
    }

    return true;
  }

  let ansBlack = 0;
  let ansWhite = 0;
  function dfsBlack(ind, cnt) {
    // 최대 비숍의 개수 갱신
    ansBlack = Math.max(ansBlack, cnt);
    for (let i = ind; i < possibleArea.length; i++) {
      const x = possibleArea[i][0];
      const y = possibleArea[i][1];
      // '짝수 행'인 경우 → 열의 인덱스 짝수
      // '홀수 행'인 경우 → 열의 인덱스 홀수
      if (!(x % 2 === 0 && y % 2 !== 0) && !(x % 2 === 1 && y % 2 !== 1)) {
        if (!bishop[x][y] && isPossible(x, y)) {
          bishop[x][y] = true;
          dfsBlack(i + 1, cnt + 1);
          bishop[x][y] = false;
        }
      }
    }
  }

  function dfsWhite(ind, cnt) {
    // 최대 비숍의 개수 갱신
    ansWhite = Math.max(ansWhite, cnt);
    for (let i = ind; i < possibleArea.length; i++) {
      const x = possibleArea[i][0];
      const y = possibleArea[i][1];
      // '짝수 행'인 경우 → 열의 인덱스 홀수
      // '홀수 행'인 경우 → 열의 인덱스 짝수
      if (!(x % 2 === 0 && y % 2 !== 1) && !(x % 2 === 1 && y % 2 !== 0)) {
        if (!bishop[x][y] && isPossible(x, y)) {
          bishop[x][y] = true;
          dfsWhite(i + 1, cnt + 1);
          bishop[x][y] = false;
        }
      }
    }
  }

  dfsBlack(0, 0);
  dfsWhite(0, 0);
  console.log(ansBlack + ansWhite);
  return ansBlack + ansWhite + '';
};

test('TC1', () => {
  expect(
    solution(`5
1 1 0 1 1
0 1 0 0 0
1 0 1 0 1
1 0 0 0 0
1 0 1 1 1`)
  ).toStrictEqual(`7`);
});
