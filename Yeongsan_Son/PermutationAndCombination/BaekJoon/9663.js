/* 
0  0  0  0  0  0  0  0
0  0  0  0  0  0  0  0
0  0  0  0  0  0  0  0
0  0  0  0  0  0  0  0
0  0  0  0  0  0  0  0
0  0  0  0  0  0  0  0
0  0  0  0  0  0  0  0
0  0  0  0  0  0  0  0

같은 행
같은 열
대각선
*/
function check(queen, row) {
  for (let i = 0; i < row; i++) {
    // 검증: 같은 열인지 대각선 위치인지
    if (queen[i] === queen[row] || Math.abs(queen[i] - queen[row]) === row - i) {
      return false;
    }
  }
  return true;
}

function search(queen, row) {
  const n = queen.length;
  let count = 0;

  if (n === row) return 1; // 탈출조건: 하나의 행의 모든 열을 순회
  for (let col = 0; col < n; col++) {
    // (0, 0) (0, 1) (0, 2) (0, 3) (0, 4) (0, 5) (0, 6) (0, 7) (0, 8) → (1, 0) ... → (2, 0) → ... → (n, 0) ...
    queen[row] = col;
    if (check(queen, row)) count += search(queen, row + 1); // 퀸을 해당 열에 놓을 수 있는지
  }
  return count;
}

function sol(s) {
  const n = +s.toString().trim();
  return search(
    Array.from({ length: n }, () => 0),
    0
  );
}

test('TC1', () => {
  expect(sol('8')).toStrictEqual(92);
});
