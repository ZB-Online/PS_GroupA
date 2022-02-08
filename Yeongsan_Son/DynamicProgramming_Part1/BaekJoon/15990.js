function sol(s) {
  const [N, ...arr] = s.toString().trim().split('\n').map(Number);
  console.log(N, arr);
}

test('TC1', () => {
  expect(
    sol(`3
4
7
10`)
  ).toStrictEqual([3, 9, 27]);
});
