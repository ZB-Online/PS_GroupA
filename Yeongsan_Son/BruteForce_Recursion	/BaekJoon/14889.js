function sol(s) {
  const input = s.toString().trim().split('\n');
  console.log(input);
}

test('TC1', () => {
  expect(
    sol(`4
0 1 2 3
4 0 5 6
7 1 0 2
3 4 5 0`)
  ).toStrictEqual(0);
});

test('TC2', () => {
  expect(
    sol(`6
0 1 2 3 4 5
1 0 2 3 4 5
1 2 0 3 4 5
1 2 3 0 4 5
1 2 3 4 0 5
1 2 3 4 5 0`)
  ).toStrictEqual(2);
});

test('TC3', () => {
  expect(
    sol(`8
0 5 4 5 4 5 4 5
4 0 5 1 2 3 4 5
9 8 0 1 2 3 1 2
9 9 9 0 9 9 9 9
1 1 1 1 0 1 1 1
8 7 6 5 4 0 3 2
9 1 9 1 9 1 0 9
6 5 4 3 2 1 9 0`)
  ).toStrictEqual(1);
});
