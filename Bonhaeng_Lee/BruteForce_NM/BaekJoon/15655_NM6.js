const solution = function (i) {
  const [[N, M], elements] = i
    .toString()
    .trim()
    .split('\n')
    .map(input => input.split(' ').map(Number));
  const result = [];
  const perm = [];

  const sortedElements = elements.sort((a, b) => a - b);
  const DFS = () => {
    if (perm.length === M) {
      result.push(perm.join(' '));
      return;
    }
    for (let i = 0; i < N; i++) {
      if (
        !perm.includes(sortedElements[i]) &&
        (perm.length === 0 || perm[perm.length - 1] < sortedElements[i])
      ) {
        perm.push(sortedElements[i]);
        DFS();
        perm.pop();
      }
    }
  };

  DFS();
  // BOJ 제출
  console.log(result.join('\n'));
  return result.join('\n');
};

test('TC1', () => {
  expect(
    solution(`3 1
4 5 2`)
  ).toStrictEqual(`2
4
5`);
});
test('TC2', () => {
  expect(
    solution(`4 2
9 8 7 1`)
  ).toStrictEqual(`1 7
1 8
1 9
7 8
7 9
8 9`);
});
test('TC3', () => {
  expect(
    solution(`4 4
1231 1232 1233 1234`)
  ).toStrictEqual(`1231 1232 1233 1234`);
});
