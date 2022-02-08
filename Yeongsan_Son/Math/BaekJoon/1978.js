function sol(s) {
  const input = s.toString().trim().split('\n');
  const N = +input[0];
  const nums = input[1].split(' ').map(Number);
  const prime = [];
}

test('TC1', () => {
  expect(
    sol(`4
1 3 5 7`)
  ).toStrictEqual(3);
});
