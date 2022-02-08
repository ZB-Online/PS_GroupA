function sol(input) {
  const [A, B, C] = input.toString().trim().split(' ').map(Number);
  let str = '';
  str += `${(A + B) % C}` + '\n';
  str += `${((A % C) + (B % C)) % C}` + '\n';
  str += `${(A * B) % C}` + '\n';
  str += `${((A % C) * (B % C)) % C}`;

  return str;
}

test('TC1', () => {
  expect(sol('5 8 4')).toStrictEqual(`1
1
0
0`);
});
