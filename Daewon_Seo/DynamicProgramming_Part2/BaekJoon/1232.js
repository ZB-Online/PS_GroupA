const solution = (input) => {
    const [n, ...nums] = input
        .toString()
        .trim()
        .split('\n')
        .map((el) => +el);

    const dp = Array.from({ length: 1000001 });

    const mod = 1000000009;

    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for (let i = 4; i <= 1000000; i += 1) {
        dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % mod;
    }

    for (let i = 0; i < n; i += 1) {
        console.log(dp[nums[i]]);
    }
};

solution(`3
4
7
10`);
