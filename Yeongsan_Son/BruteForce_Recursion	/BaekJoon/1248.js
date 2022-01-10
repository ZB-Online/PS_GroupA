function sol(s) {
  const input = s.toString().trim().split('\n');
  console.log(input);
}

test('TC1', () => {
  expect(
    sol(`4
-+0++++--+`)
  ).toStrictEqual(`-2 5 -3 1`);
});
