function sol(s) {
  const input = s.toString().trim().split('\n');
  const [N, M] = input[0].split(' ').map(Number);
  const sequence = input[1].split(' ').map(Number);
  sequence.sort((a, b) => a - b);

  const result = [];
  const temp = [];
  const check = Array.from({ length: N }, () => 0);

  function dfs(l) {
    if (l === M) {
      result.push(temp.slice());
      return;
    } else {
      for (let i = 0; i < N; i++) {
        if (!check[i]) {
          check[i] = 1;
          temp.push(sequence[i]);
          dfs(l + 1);
          temp.pop();
          check[i] = 0;
        }
      }
    }
  }

  dfs(0);
  // console.log(result);
  return result
    .map(el => el.join(' '))
    .reduce((acc, curr) => {
      acc += curr + '\n';
      return acc;
    }, '')
    .trim();
}

test('TC1: 3개 중에서 1개 선택', () => {
  expect(
    sol(`3 1
4 5 2`)
  ).toStrictEqual(`2
4
5`);
});

test('TC2: 4개 중에서 2개 선택', () => {
  expect(
    sol(`4 2
9 8 7 1`)
  ).toStrictEqual(`1 7
1 8
1 9
7 1
7 8
7 9
8 1
8 7
8 9
9 1
9 7
9 8`);
});

test('TC3: 4개 중에서 4개 선택', () => {
  expect(
    sol(`4 4
1231 1232 1233 1234`)
  ).toStrictEqual(`1231 1232 1233 1234
1231 1232 1234 1233
1231 1233 1232 1234
1231 1233 1234 1232
1231 1234 1232 1233
1231 1234 1233 1232
1232 1231 1233 1234
1232 1231 1234 1233
1232 1233 1231 1234
1232 1233 1234 1231
1232 1234 1231 1233
1232 1234 1233 1231
1233 1231 1232 1234
1233 1231 1234 1232
1233 1232 1231 1234
1233 1232 1234 1231
1233 1234 1231 1232
1233 1234 1232 1231
1234 1231 1232 1233
1234 1231 1233 1232
1234 1232 1231 1233
1234 1232 1233 1231
1234 1233 1231 1232
1234 1233 1232 1231`);
});
