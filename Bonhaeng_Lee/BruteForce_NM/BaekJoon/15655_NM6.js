// sol1. DFS
const solution = function (i) {
  const [N, arr] = i
    .toString()
    .trim()
    .split('\n')
    .map((input, i) => (i === 0 ? +input : input));
};

test('TC1', () => {
  expect(
    solution(`4
-+0++++--+`)
  ).toStrictEqual(`-2 5 -3 1`);
});
