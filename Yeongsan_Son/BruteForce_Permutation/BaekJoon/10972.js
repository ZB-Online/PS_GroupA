function sol(s) {
  const input = s.toString().trim().split('\n');
  const N = +input[0];
  const arr = input[1].split(' ').map(Number);
  const sortedArr = [...arr].sort((a, b) => b - a);
  console.log(arr, sortedArr);
  if (arr.every((el, idx) => el === sortedArr[idx])) return '-1'; // validation
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
