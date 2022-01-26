const solution = (input) => {
    const N = input.toString().trim();

    const dp = Array.from({ length: 1001 }, () => 0);

    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= N; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
    }
    console.log(dp[N]);
};
solution(`4`);
