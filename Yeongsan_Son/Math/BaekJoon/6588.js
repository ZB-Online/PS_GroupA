function sol(s) {
  const nums = s.toString().trim().split('\n').map(Number);
  console.log(nums);
}

test('TC1', () => {
  expect(
    sol(`8
20
42
0`)
  ).toStrictEqual(`8 = 3 + 5
20 = 3 + 17
42 = 5 + 37`);
});
