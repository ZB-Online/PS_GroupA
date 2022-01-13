// 중복을 허용하는 순열
function sol(s) {
  const [N, M] = s.toString().trim().split(' ').map(Number);

  const result = [];
  const temp = [];

  function dfs(l) {
    if (l === M) {
      // M개를 선택한 경우
      result.push(temp.slice());
      return;
    } else {
      for (let i = 1; i <= N; i++) {
        temp.push(i);
        dfs(l + 1);
        temp.pop();
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
//     }, '')
//     .trim();
// }

// const getPermutations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map(value => [value]);

//   arr.forEach((fixed, index, origin) => {
//     const permutations = getPermutations(arr, selectNumber - 1);
//     const attached = permutations.map(permutation => [fixed, ...permutation]);
//     results.push(...attached);
//   });

//   return results;
// };

test('TC1: 3개 중에서 중복을 허용하여 1개 선택', () => {
  expect(sol(`3 1`)).toEqual(`1
2
3`);
});

test('TC2: 4개 중에서 중복을 허용하여 2개 선택', () => {
  expect(sol(`4 2`)).toEqual(`1 1
1 2
1 3
1 4
2 1
2 2
2 3
2 4
3 1
3 2
3 3
3 4
4 1
4 2
4 3
4 4`);
});

test('TC3: 3개 중에서 중복을 허용하여 3개 선택', () => {
  expect(sol(`3 3`)).toEqual(`1 1 1
1 1 2
1 1 3
1 2 1
1 2 2
1 2 3
1 3 1
1 3 2
1 3 3
2 1 1
2 1 2
2 1 3
2 2 1
2 2 2
2 2 3
2 3 1
2 3 2
2 3 3
3 1 1
3 1 2
3 1 3
3 2 1
3 2 2
3 2 3
3 3 1
3 3 2
3 3 3`);
});
