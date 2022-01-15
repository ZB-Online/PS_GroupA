function sol(s) {
  const [N, M] = s.toString().trim().split(' ').map(Number);

  const result = [];
  const temp = [];
  const check = Array.from({ length: M }, () => 0);

  function dfs(l, start) {
    if (l === M) {
      result.push(temp.slice()); // 객체 참조이기 때문에, 얕은 복사가 필요
      return;
    } else {
      for (let i = start; i <= N; i++) {
        if (!check[i]) {
          check[i] = 1;
          temp.push(i);
          dfs(l + 1, i + 1);
          temp.pop();
          check[i] = 0;
        }
      }
    }
  }

  dfs(0, 1);
  // console.log(result);
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
//   const result = getCombinations(sequence, M);
//   console.log(
//     result
//       .map(el => el.join(' '))
//       .reduce((acc, curr) => {
//         acc += curr + '\n';
//         return acc;
//       }, '')
//   );
//   return result
//     .map(el => el.join(' '))
//     .reduce((acc, curr) => {
//       acc += curr + '\n';
//       return acc;
//     }, '');
// }

// const getCombinations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map(value => [value]);

//   arr.forEach((fixed, index, origin) => {
//     const rest = origin.slice(index + 1);
//     const combinations = getCombinations(rest, selectNumber - 1);
//     const attached = combinations.map(combination => [fixed, ...combination]);
//     results.push(...attached);
//   });

//   return results;
// };

test('TC1: 3개 중에서 순서에 상관 있게 1개 선택', () => {
  expect(sol(`3 1`)).toStrictEqual(`1
2
3`);
});

test('TC2: 4개 중에서 순서에 상관 있게 2개 선택', () => {
  expect(sol(`4 2`)).toStrictEqual(`
1 2
1 3
1 4
2 3
2 4
3 4`);
});

test('TC3: 4개 중에서 순서에 상관 있게 4개 선택', () => {
  expect(sol(`4 4`)).toStrictEqual(`1 2 3 4`);
});
