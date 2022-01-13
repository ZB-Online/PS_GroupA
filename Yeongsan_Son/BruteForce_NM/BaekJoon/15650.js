function sol(s) {}

test('TC1', () => {
  expect(sol(`3 1`)).toStrictEqual(`1
2
3`);
});

test('TC2', () => {
  expect(sol(`4 2`)).toStrictEqual(`1 2
1 3
1 4
2 3
2 4
3 4`);
});

test('TC3', () => {
  expect(sol(`4 4`)).toStrictEqual(`1 2 3 4`);
});
