function sol(s) {
  const input = s.toString().split('\n');
  console.log(input);
}

test('TC1', () => {
  expect(
    sol(`6
20 1 15 8 4 10`)
  ).toStrictEqual(62);
});
