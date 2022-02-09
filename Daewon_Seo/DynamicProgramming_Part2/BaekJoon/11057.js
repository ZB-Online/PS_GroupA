const solution = (input) => {
    const n = Number(input.toString().trim());

    const dp = Array.from({ length: n + 1 }, () =>
        Array.from({ length: 10 }, () => 0)
    );

    dp[1][0] = 1;
    dp[1][1] = 1;
    dp[1][2] = 1;
    dp[1][3] = 1;
    dp[1][4] = 1;
    dp[1][5] = 1;
    dp[1][6] = 1;
    dp[1][7] = 1;
    dp[1][8] = 1;
    dp[1][9] = 1;

    for (let i = 2; i <= n; i += 1) {
        for (let j = 9; j >= 0; j -= 1) {
            dp[i][j] = j === 9 ? dp[i - 1][j] : dp[i - 1][j] + dp[i][j + 1];
        }
    }

    let sum = 0;

    for (let i = 0; i < 10; i += 1) {
        sum += dp[n][i];
    }
    console.log(sum);
};

solution(`3`);
