const solution = (input) => {
    const [n, ...nums] = input
        .toString()
        .trim()
        .split('\n')
        .map((el) => +el);

    const dp = Array(n).fill(0);

    dp[1] = nums[0];
    dp[2] = nums[0] + nums[1];

    for (let i = 3; i <= n; i += 1) {
        dp[i] = Math.max(
            dp[i - 3] + nums[i - 2] + nums[i - 1],
            dp[i - 2] + nums[i - 1],
            dp[i - 1]
        );
    }
    console.log(dp[n]);
};

solution(`6
6
10
13
9
8
1`);
