const solution = function (n) {
  let result = '';
  const visited = [...Array(10)].fill(0);
  const permutation = [];

  const dfs = () => {
    if (permutation.length === +n) {
      return (result += permutation.join(' ') + '\n');
    }
    for (let i = 1; i <= +n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        permutation.push(i);
        dfs();
        permutation.pop();
        visited[i] = false;
      }
    }
  };
  dfs();
  // BOJ 제출
  console.log(result.substring(0, result.length - 1));
  return result.substring(0, result.length - 1);
};

test('TC1', () => {
  expect(solution('3')).toStrictEqual(`1 2 3
1 3 2
2 1 3
2 3 1
3 1 2
3 2 1`);
});
