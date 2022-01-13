function sol(s) {}

test('TC1', () => {
  expect(sol(`3 1`)).toStrictEqual(`1
2
3`);
});

test('TC2', () => {
  expect(sol(`4 2`)).toStrictEqual(`1 1
1 2
1 3
1 4
2 2
2 3
2 4
3 3
3 4
4 4`);
});

test('TC3', () => {
  expect(sol(`3 3`)).toStrictEqual(`1 1 1
1 1 2
1 1 3
1 2 2
1 2 3
1 3 3
2 2 2
2 2 3
2 3 3
3 3 3`);
});
