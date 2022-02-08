const solution = (input) => {
    const [T, ...nums] = input
        .toString()
        .trim()
        .split('\n')
        .map((el) => +el);

    const dp = Array.from({ length: 100001 }, () => Array(4).fill(0));

    const mod = 1000000009;

    dp[1][1] = 1; // dp[1][2] = 0, dp[1][3] = 0;
    dp[2][2] = 1; // dp[2][1] = 0, dp[2][3] = 0;
    dp[3][1] = 1; // + 2
    dp[3][2] = 1; // + 1
    dp[3][3] = 1; // 3

    for (let i = 4; i <= 100000; i++) {
        dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % mod;
        dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % mod;
        dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % mod;
    }

    for (let i = 0; i < T; i++) {
        console.log((dp[nums[i]][1] + dp[nums[i]][2] + dp[nums[i]][3]) % mod);
    }
};
solution(`3
4
7
10`);
