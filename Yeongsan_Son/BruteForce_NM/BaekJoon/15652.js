function sol(s) {
  const [N, M] = s.toString().trim().split(' ').map(Number);

  const result = [];
  const temp = [];
  const check = Array.from({ length: N }, () => 0);

  function dfs(l, start) {
    if (l === M) {
      result.push(temp.slice());
      return;
    } else {
      for (let i = start; i <= N; i++) {
        temp.push(i);
        dfs(l + 1, i);
        temp.pop();
      }
    }
  }

  dfs(0, 1);
  console.log(result);
  return result
    .map(el => el.join(' '))
    .reduce((acc, curr) => {
      acc += curr + '\n';
      return acc;
    }, '')
    .trim();
}

test('TC1', () => {
  expect(sol(`3 1`)).toStrictEqual(`1
2
3`);
});

test('TC2', () => {
  expect(sol(`4 2`)).toStrictEqual(`1 1
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
  expect(sol(`3 3`)).toStrictEqual(`1 1 1
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
