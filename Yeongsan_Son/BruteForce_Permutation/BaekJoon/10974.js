function sol(s) {
  const input = +s.toString().trim();
  console.log(input);
}

test('TC1', () => {
  expect(sol(`3`)).toStrictEqual(`1 2 3
1 3 2
2 1 3
2 3 1
3 1 2
3 2 1`);
});
