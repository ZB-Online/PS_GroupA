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
      if (perm.length === 0 || sortedElements[i] >= perm[perm.length - 1]) {
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
  ).toStrictEqual(`1 1
1 7
1 8
1 9
7 7
7 8
7 9
8 8
8 9
9 9`);
});
test('TC3', () => {
  expect(
    solution(`4 4
1231 1232 1233 1234`)
  ).toStrictEqual(`1231 1231 1231 1231
1231 1231 1231 1232
1231 1231 1231 1233
1231 1231 1231 1234
1231 1231 1232 1232
1231 1231 1232 1233
1231 1231 1232 1234
1231 1231 1233 1233
1231 1231 1233 1234
1231 1231 1234 1234
1231 1232 1232 1232
1231 1232 1232 1233
1231 1232 1232 1234
1231 1232 1233 1233
1231 1232 1233 1234
1231 1232 1234 1234
1231 1233 1233 1233
1231 1233 1233 1234
1231 1233 1234 1234
1231 1234 1234 1234
1232 1232 1232 1232
1232 1232 1232 1233
1232 1232 1232 1234
1232 1232 1233 1233
1232 1232 1233 1234
1232 1232 1234 1234
1232 1233 1233 1233
1232 1233 1233 1234
1232 1233 1234 1234
1232 1234 1234 1234
1233 1233 1233 1233
1233 1233 1233 1234
1233 1233 1234 1234
1233 1234 1234 1234
1234 1234 1234 1234`);
});
