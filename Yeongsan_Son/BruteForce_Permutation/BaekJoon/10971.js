function sol(s) {
  const input = s.toString().trim().split('\n');
  console.log(input);
}

test('TC1', () => {
  expect(
    sol(`4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`)
  ).toStrictEqual(35);
});
