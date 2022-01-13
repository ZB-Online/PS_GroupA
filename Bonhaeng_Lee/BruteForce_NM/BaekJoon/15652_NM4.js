const solution = function (i) {
  const [N, M] = i.toString().trim().split(' ').map(Number);
  const result = [];
  const perm = [];

  const DFS = () => {
    if (perm.length === M) {
      result.push(perm.join(' '));
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (perm.length === 0 || perm[perm.length - 1] <= i) {
        perm.push(i);
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
  expect(solution(`3 1`)).toStrictEqual(`1
2
3`);
});
test('TC2', () => {
  expect(solution(`4 2`)).toStrictEqual(`1 1
1 2
1 3
1 4
2 2
2 3
2 4
3 3
3 4
4 4`);
});
test('TC3', () => {
  expect(solution(`3 3`)).toStrictEqual(`1 1 1
1 1 2
1 1 3
1 2 2
1 2 3
1 3 3
2 2 2
2 2 3
2 3 3
3 3 3`);
});
