const solution = (input) => {
    const [n, nums] = input
        .toString()
        .trim()
        .split('\n')
        .map((el, i) => (i === 0 ? +el : el.split(' ').map((num) => +num)));

    const dp = [...nums];

    dp[0] = nums[0];
    let max = dp[0];

    for (let i = 1; i < n; i += 1) {
        if (dp[i - 1] > 0 && dp[i] + dp[i - 1] > 0) {
            dp[i] += dp[i - 1];
        }

        max = Math.max(dp[i], max);
    }
    console.log(max);
};

solution(`10
2 1 -4 3 4 -4 6 5 -5 1`);
