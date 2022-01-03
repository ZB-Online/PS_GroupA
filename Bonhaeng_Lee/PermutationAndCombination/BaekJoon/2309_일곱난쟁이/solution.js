const solution = function (input) {
  const arr = input.toString().trim().split('\n').map(Number);
  const total = arr.reduce((sum, height) => sum + height, 0);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (total - (arr[i] + arr[j]) === 100) {
        // BOJ 제출
        console.log(
          arr
            .filter((_, idx) => idx !== i && idx !== j)
            .sort((heightA, heightB) => heightA - heightB)
            .join('\n')
        );
        return arr
          .filter((_, idx) => idx !== i && idx !== j)
          .sort((heightA, heightB) => heightA - heightB)
          .join('\n');
      }
    }
  }
};

test('TC1', () => {
  expect(
    solution(`20
7
23
19
10
15
25
8
13`)
  ).toStrictEqual(`7
8
10
13
19
20
23`);
});
