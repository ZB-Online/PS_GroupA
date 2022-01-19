const solution = (input) => {
  const [N, ...nums] = input
    .toString()
    .trim()
    .split("\n")
    .map((num) => +num);

  // 에라토스테네스의 체 알고리즘을 사용해서 1부터 100만까지를 순회하면서 배열에 각각의 인덱스 값에 해당하는 값을 더해줌
  // 가령 2를 약수로 갖는 모든 값들에는 2를 더한 값이 들어가야 하므로 2를 더해줌, 즉 해당 값을 곱했을때의 값은 그 값을 약수로 갖는 다는 의미이기 때문임

  const sieve = Array(1000001).fill(1);
  const dp = Array(1000000);

  dp[0] = 0;

  for (let i = 2; i <= 1000000; i++) {
    for (let j = 1; i * j <= 1000000; j++) {
      sieve[i * j] += i;
    }
  }

  for (let i = 1; i <= 1000000; i++) {
    dp[i] = dp[i - 1] + sieve[i];
  }

  let res = "";

  for (let i = 0; i < N; i++) {
    res += `${dp[nums[i]]}\n`;
  }

  console.log(res);
};
solution(`5
1
2
10
70
10000`);
