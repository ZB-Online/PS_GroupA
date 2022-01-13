// 중복을 허용하는 순열
function sol(s) {
  const [N, M] = s.toString().trim().split(' ').map(Number);
  const sequence = Array.from({ length: N }, (_, idx) => idx + 1);
  const result = getPermutations(sequence, M);
  return result
    .map(el => el.join(' '))
    .reduce((acc, curr) => {
      acc += curr + '\n';
      return acc;
    }, '')
    .trim();
}

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map(value => [value]);

  arr.forEach((fixed, index, origin) => {
    const permutations = getPermutations(arr, selectNumber - 1);
    const attached = permutations.map(permutation => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
};

test('TC1', () => {
  expect(sol(`3 1`)).toEqual(`1
2
3`);
});

test('TC2', () => {
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

test('TC3', () => {
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
