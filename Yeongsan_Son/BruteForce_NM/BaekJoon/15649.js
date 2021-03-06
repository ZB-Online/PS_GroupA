function sol(s) {
  const [N, M] = s.toString().trim().split(' ').map(Number);

  const result = [];
  const temp = [];
  const check = Array.from({ length: N }, () => 0);

  function dfs(l) {
    console.log(l);
    if (l === M) {
      result.push(temp.slice());
      return;
    } else {
      for (let i = 1; i <= N; i++) {
        if (!check[i]) {
          check[i] = 1;
          temp.push(i);
          dfs(l + 1);
          temp.pop();
          check[i] = 0;
        }
      }
    }
  }

  dfs(0);
  return result
    .map(el => el.join(' '))
    .reduce((acc, curr) => {
      acc += curr + '\n';
      return acc;
    }, '')
    .trim();
}
// function sol(s) {
//   const [N, M] = s.toString().trim().split(' ').map(Number);
//   const sequence = Array.from({ length: N }, (_, idx) => idx + 1);
//   const result = getPermutations(sequence, M);
//   return result
//     .map(el => el.join(' '))
//     .reduce((acc, curr) => {
//       acc += curr + '\n';
//       return acc;
//     }, ``);
// }

// const getPermutations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map(value => [value]);

//   arr.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     const permutations = getPermutations(rest, selectNumber - 1);
//     const attached = permutations.map(permutation => [fixed, ...permutation]);
//     results.push(...attached);
//   });

//   return results;
// };

test('TC1: 3개 중에서 순서에 상관 없이 1개 선택', () => {
  expect(sol(`3 1`)).toStrictEqual(`
1
2
3`);
});

test('TC2: 4개 중에서 순서에 상관 없이 2개 선택', () => {
  expect(sol(`4 2`)).toStrictEqual(`
1 2
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
4 3`);
});

test('TC3: 4개 중에서 순서에 상관 없이 4개 선택', () => {
  expect(sol(`4 4`)).toStrictEqual(`
1 2 3 4
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
4 3 2 1`);
});
