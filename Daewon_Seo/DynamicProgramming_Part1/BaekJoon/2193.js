const solution = (input) => {
  /**
   * 1. 이친수는 0으로 시작하지 않음
   * 2. 이친수는 1이 두 번 연속으로 나타나지 않음 = 11을 부분 문자열로 갖지 않음
   */
  const N = input.toString().trim();
  const dp = Array(N + 1);

  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i <= N; i++) {
    dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
  }

  console.log(String(dp[N]));
};

solution(`6`);
