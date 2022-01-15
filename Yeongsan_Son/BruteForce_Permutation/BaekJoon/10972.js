function sol(s) {
  const input = s.toString().trim().split('\n');
  console.log(input);
}

test('TC1', () => {
  expect(
    sol(`4
1 2 3 4`)
  ).toStrictEqual(`1 2 4 3`);
});

test('TC2', () => {
  expect(
    sol(`5
5 4 3 2 1`)
  ).toStrictEqual(`-1`);
});
