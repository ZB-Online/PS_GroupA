// X % 3 === 0 => X / 3
// X % 2 === 0 => X / 2
// -1
// const fs = require('fs');
// const X = +fs.readFileSync('./Yeongsan_Son/PermutationAndCombination/1463.txt').toString();

function sol(num) {
  let min = Number.MAX_SAFE_INTEGER;

  function DFS(num, count) {
    if (count >= min) return;
    if (num === 1) {
      min = min > count ? count : min;
      return;
    }
    if (num % 2 === 0) DFS(num / 2, count + 1);
    if (num % 3 === 0) DFS(num / 3, count + 1);
    DFS(num - 1, count + 1);
  }

  DFS(num, 0);
  return min;
}

test('TC1', () => {
  expect(sol(2)).toStrictEqual(1);
});

test('TC2', () => {
  expect(sol(10)).toStrictEqual(3);
});
