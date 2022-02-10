const solution = (input) => {
    const N = Number(input.toString().trim());

    const mod = 9901;

    const dp = Array(N + 1).fill(1);

    dp[1] = 3;

    for (let i = 2; i <= N; i += 1) {
        dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % mod;
    }

    console.log(dp[N]);
};

solution(`4`);
