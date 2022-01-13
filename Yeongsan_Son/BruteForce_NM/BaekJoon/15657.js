function sol(s) {
  const input = s.toString().trim().split('\n');
  const [N, M] = input[0].split(' ').map(Number);
  const sequence = input[1].split(' ').map(Number);
  sequence.sort((a, b) => a - b);

  const result = [];
  const temp = [];
  const check = Array.from({ length: N }, () => 0);

  function dfs(l, start) {
    if (l === M) {
      result.push(temp.slice());
      return;
    } else {
      for (let i = start; i < N; i++) {
        temp.push(sequence[i]);
        dfs(l + 1, i);
        temp.pop();
      }
    }
  }

  dfs(0, 0);
  // console.log(result);
  return result
    .map(el => el.join(' '))
    .reduce((acc, curr) => {
      acc += curr + '\n';
      return acc;
    }, '')
    .trim();
}

test('TC1', () => {
  expect(
    sol(`3 1
4 5 2`)
  ).toStrictEqual(`2
4
5`);
});

test('TC2', () => {
  expect(
    sol(`4 2
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
    sol(`4 4
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
