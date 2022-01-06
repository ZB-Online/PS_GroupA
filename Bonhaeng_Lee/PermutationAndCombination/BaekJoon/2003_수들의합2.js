const solution = function (i) {
  const [input1, input2] = i.toString().trim().split('\n');
  const [N, M] = input1.split(' ').map(Number);
  const arr = input2.split(' ').map(Number);

  const sumArr = [...Array(10001)].fill(0);
  let sum = 0;
  arr.forEach((el, idx) => {
    sum += el;
    sumArr[idx + 1] = sum;
  });

  let count = 0;
  for (let i = 0; i <= N; i++) {
    let start = i;
    let end = N;
    let mid = 0;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      const currentSum = sumArr[mid] - sumArr[i];
      if (M > currentSum) {
        start = mid + 1;
      } else if (M < currentSum) {
        end = mid - 1;
      } else {
        count++;
        start++;
        break;
      }
    }
  }
  console.log(count);
  return count + '';
};

test('TC1', () => {
  expect(
    solution(`4 2
1 1 1 1`)
  ).toStrictEqual('3');
});
test('TC2', () => {
  expect(
    solution(`10 5
1 2 3 4 2 5 3 1 1 2`)
  ).toStrictEqual('3');
});
