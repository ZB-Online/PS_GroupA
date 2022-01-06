const solution = function (i) {
  const N = i.toString().trim() * 1;
  let result = 0;
  const board = [];

  const check = row => {
    for (let i = 0; i < row; i++) {
      // 세로줄/대각선에 퀸이 있는지 확인
      // board[row]는 행, row는 열을 의미한다.
      if (
        board[row] === board[i] ||
        Math.abs(board[row] - board[i]) === row - i
      ) {
        return false;
      }
    }
    return true;
  };

  const nQueen = function (row) {
    // 모든 줄에 대해 퀸을 놓았을 때
    if (row === N) result++;
    // 퀸을 놓을 수 있는 위치를 찾는다.
    for (let col = 0; col < N; col++) {
      board[row] = col;
      // 위치가 유효하면 다음 행에 퀸 배치 아니면 다음 위치로
      if (check(row)) nQueen(row + 1);
    }
  };

  nQueen(0);

  console.log(result);
  return result + '';
};

test('TC1', () => {
  expect(solution('8')).toStrictEqual('92');
});
