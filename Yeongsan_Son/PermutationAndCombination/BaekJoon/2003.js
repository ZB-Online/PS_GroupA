// 1부터 N까지의 수열에서
// i번째 부터 j번째 수까지의 합이 M이 되는 경우의 수
// 연속된 수의 합 or 하나의 수

function sol(s) {
  const input = s
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number));
  const [[len, M], numbers] = input;
  let count = 0;

  for (let lt = 0; lt < numbers.length; lt++) {
    let sum = numbers[lt];
    let rt = lt;

    while (sum < M && rt < len - 1) {
      rt++;
      sum += numbers[rt];
    }

    if (sum === M) count++;
  }

  return count;
}

test('TC1', () => {
  expect(
    sol(`4 2
1 1 1 1
`)
  ).toStrictEqual(3);
});

test('TC2', () => {
  expect(
    sol(`10 5
1 2 3 4 2 5 3 1 1 2
`)
  ).toStrictEqual(3);
});
