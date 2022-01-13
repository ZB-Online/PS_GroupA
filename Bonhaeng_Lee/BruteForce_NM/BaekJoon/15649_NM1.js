// sol1. DFS
const solution = function (i) {
  const [N, M] = i.toString().trim().split(' ').map(Number);
  const perm = [];
  const visited = Array(N).fill(false);
  let answer = '';

  const permutation = () => {
    if (perm.length === M) {
      answer += perm.join(' ') + '\n';
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        perm.push(i);
        permutation(i);
        perm.pop();
        visited[i] = false;
      }
    }
  };

  permutation(0);
  console.log(answer);
  return answer;
};

test('TC1', () => {
  expect(solution(`3 1`)).toStrictEqual(`1
2
3
`);
});
test('TC2', () => {
  expect(solution(`4 2`)).toStrictEqual(`1 2
1 3
1 4
2 1
2 3
2 4
3 1
3 2
3 4
4 1
4 2
4 3
`);
});
test('TC3', () => {
  expect(solution(`4 4`)).toStrictEqual(`1 2 3 4
1 2 4 3
1 3 2 4
1 3 4 2
1 4 2 3
1 4 3 2
2 1 3 4
2 1 4 3
2 3 1 4
2 3 4 1
2 4 1 3
2 4 3 1
3 1 2 4
3 1 4 2
3 2 1 4
3 2 4 1
3 4 1 2
3 4 2 1
4 1 2 3
4 1 3 2
4 2 1 3
4 2 3 1
4 3 1 2
4 3 2 1
`);
});
