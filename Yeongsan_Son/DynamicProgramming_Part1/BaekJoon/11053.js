// https://chanhuiseok.github.io/posts/algo-49/
// LIS 알고리즘

function sol(s) {
  const input = s.toString().trim().split('\n');
  const numbers = input[1].split(' ').map(Number);
  const dp = [];

  for (let i = 0; i < numbers.length; i++) {
    if (dp.length === 0 || dp[dp.length - 1] < numbers[i]) dp.push(numbers[i]);
    else dp[binarySearch(dp, 0, numbers.length - i, numbers[i])] = numbers[i];
  }

  return dp.length;
}

function binarySearch(arr, left, right, target) {
  let mid;

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) left = mid + 1;
    else right = mid;
  }
  return right;
}

test('TC1', () => {
  expect(
    sol(`6
10 20 10 30 20 50`)
  ).toStrictEqual(4);
});
