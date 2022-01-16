const solution = function (i) {
  const n = i.toString().trim();
  let result = '';
  const visit = [...Array(10)].fill(0);
  const perm = [];

  const permutations = () => {
    if (perm.length === +n) {
      result += perm.join(' ') + '\n';
      return;
    }
    for (let i = 1; i <= +n; i++) {
      if (!visit[i]) {
        visit[i] = true;
        perm.push(i);
        permutations();
        perm.pop();
        visit[i] = false;
      }
    }
  };
  permutations();
  console.log(result.substring(0, result.length - 1));
  return result.substring(0, result.length - 1);
};

test('TC1', () => {
  expect(solution(`3`)).toStrictEqual(`1 2 3
1 3 2
2 1 3
2 3 1
3 1 2
3 2 1`);
});
