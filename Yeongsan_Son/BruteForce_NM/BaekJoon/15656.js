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
  ).toStrictEqual(`1 1
1 7
1 8
1 9
7 1
7 7
7 8
7 9
8 1
8 7
8 8
8 9
9 1
9 7
9 8
9 9`);
});

test('TC3', () => {
  expect(
    sol(`3 3
1231 1232 1233`)
  ).toStrictEqual(`1231 1231 1231
1231 1231 1232
1231 1231 1233
1231 1232 1231
1231 1232 1232
1231 1232 1233
1231 1233 1231
1231 1233 1232
1231 1233 1233
1232 1231 1231
1232 1231 1232
1232 1231 1233
1232 1232 1231
1232 1232 1232
1232 1232 1233
1232 1233 1231
1232 1233 1232
1232 1233 1233
1233 1231 1231
1233 1231 1232
1233 1231 1233
1233 1232 1231
1233 1232 1232
1233 1232 1233
1233 1233 1231
1233 1233 1232
1233 1233 1233`);
});
