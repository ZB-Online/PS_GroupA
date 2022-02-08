function sol(input) {
  input = input.toString().trim().split('\n');
  const N = +input[0];
  const arr = input[1].split(' ').map(Number);

  return Math.min(...arr) * Math.max(...arr);
}

test('TC1', () => {
  expect(
    sol(`2
4 2`)
  ).toStrictEqual(8);
});

test('TC2', () => {
  expect(
    sol(`1
2`)
  ).toStrictEqual(4);
});

test('TC3', () => {
  expect(
    sol(`6
3 4 2 12 6 8`)
  ).toStrictEqual(24);
});

test('TC4', () => {
  expect(
    sol(`14
14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596`)
  ).toStrictEqual(185192);
});
