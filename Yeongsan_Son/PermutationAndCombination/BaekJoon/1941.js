// 소문난 칠공주
// 인접행렬 || 인접리스트
// 25명 중 7명 선택, 7명 중 4명은 이다솜파, 7개가 인접해있는지

function sol(s) {
  const input = s.toString().trim().split('\n');
}

test('TC1', () => {
  expect(
    sol(`YYYYY
SYSYS
YYYYY
YSYYS
YYYYY
`)
  ).toStrictEqual(2);
});
