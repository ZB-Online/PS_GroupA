function sol(s) {}

test('TC1', () => {
  expect(
    sol(`1 1 1
1`)
  ).toStrictEqual(1);
});

test('TC2', () => {
  expect(
    sol(`2 2 2
1 2
3 4`)
  ).toStrictEqual(5);
});

test('TC3', () => {
  expect(
    sol(`2 2 2
5 4
4 5`)
  ).toStrictEqual(10);
});

test('TC4', () => {
  expect(
    sol(`5 5 3
1 9 8 -2 0
-1 9 8 -3 0
-5 1 9 -1 0
0 0 0 9 8
9 9 9 0 0`)
  ).toStrictEqual(27);
});
