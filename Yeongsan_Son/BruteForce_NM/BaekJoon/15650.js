function sol(s) {
  const [N, M] = s.toString().trim().split(' ').map(Number);
  const sequence = Array.from({ length: N }, (_, idx) => idx + 1);
  const result = getCombinations(sequence, M);
  console.log(
    result
      .map(el => el.join(' '))
      .reduce((acc, curr) => {
        acc += curr + '\n';
        return acc;
      }, '')
  );
  return result
    .map(el => el.join(' '))
    .reduce((acc, curr) => {
      acc += curr + '\n';
      return acc;
    }, '');
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map(value => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map(combination => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
};

test('TC1', () => {
  expect(sol(`3 1`)).toStrictEqual(`1
2
3`);
});

test('TC2', () => {
  expect(sol(`4 2`)).toStrictEqual(`1 2
1 3
1 4
2 3
2 4
3 4`);
});

test('TC3', () => {
  expect(sol(`4 4`)).toStrictEqual(`1 2 3 4`);
});
