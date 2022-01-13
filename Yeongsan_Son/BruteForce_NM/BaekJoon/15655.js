function sol(s) {}

test('TC1', () => {
  expect(
    sol(`3 1
4 5 2`)
  ).toStrictEqual(`2
4
5`);
});

test('TC2', () => {
  expect(
    sol(`4 2
9 8 7 1`)
  ).toStrictEqual(`1 7
1 8
1 9
7 8
7 9
8 9`);
});

test('TC3', () => {
  expect(
    sol(`4 4
1231 1232 1233 1234`)
  ).toStrictEqual(`1231 1232 1233 1234`);
});
