const solution = function (i) {
  const [SIZE, ...arr] = i.toString().trim().split('\n');
  const board = []; // 비숍을 놓을 수 있는 좌표의 "일차원 배열"
  arr.forEach((row, i) =>
    row
      .split(' ')
      .forEach((col, j) => (col ? +col && board.push([i, j]) : +col))
  );
  const bishop = [...Array(10)].map(() => [...Array(10).fill(false)]); // 비숍을 놓은 좌표의 "이차원 배열"

  function isPossible(x, y) {
    let nx = x - 1;
    let ny = y - 1;
    while (nx >= 0 && ny >= 0) {
      if (bishop[nx--][ny--]) return false;
    }
    // 오른쪽 위 대각선
    nx = x - 1;
    ny = y + 1;
    while (nx >= 0 && ny < SIZE) {
      if (bishop[nx--][ny++]) return false;
    }
    return true;
  }

  const isEven = index => index % 2 === 0;
  const isOdd = index => index % 2 === 1;

  let ansBlack = 0;
  const dfsBlack = (index, cnt) => {
    ansBlack = Math.max(ansBlack, cnt);

    for (let i = index; i < board.length; i++) {
      const [x, y] = board[i];
      // "짝수" 행인 경우 "짝수" 열이여야만 비숍을 놓을 수 있다.
      // "홀수" 행인 경우 "홀수" 열이여야만 비숍을 놓을 수 있다.
      if ((isEven(x) && isEven(y)) || (isOdd(x) && isOdd(y))) {
        if (!bishop[x][y] && isPossible(x, y)) {
          bishop[x][y] = true;
          dfsBlack(i + 1, cnt + 1);
          bishop[x][y] = false;
        }
      }
    }
  };

  let ansWhite = 0;
  const dfsWhite = (index, cnt) => {
    ansWhite = Math.max(ansWhite, cnt);

    for (let i = index; i < board.length; i++) {
      const [x, y] = board[i];
      // "짝수" 행인 경우 "홀수" 열이여야만 비숍을 놓을 수 있다.
      // "홀수" 행인 경우 "짝수" 열이여야만 비숍을 놓을 수 있다.
      if ((isEven(x) && isOdd(y)) || (isOdd(x) && isEven(y))) {
        if (!bishop[x][y] && isPossible(x, y)) {
          bishop[x][y] = true;
          dfsWhite(i + 1, cnt + 1);
          bishop[x][y] = false;
        }
      }
    }
  };

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
