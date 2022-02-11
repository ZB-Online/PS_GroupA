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

    // 00 01 02 03 04 05 06 07 08 09 (9)
    // 11 12 13 14 15 16 17 18 19 (8)
    // 22 23 24 25 26 27 28 29 (7)
    // ...
    // 88 89 (2)
    // 99 (1)
    //   2         1          1
    dp[2][8] = dp[1][8] + dp[2][9];
    //  3           1          2
    dp[2][7] = dp[1][7] + dp[2][8];
    //  4           1          3
    dp[2][6] = dp[1][6] + dp[2][7];

    // 000 001 002 003 ... 099
    // 1

    for (let i = 2; i <= n; i += 1) {
        for (let j = 9; j >= 0; j -= 1) {
            dp[i][j] = j === 9 ? dp[i - 1][j] : dp[i - 1][j] + dp[i][j + 1];
        }
    }

    console.log(dp);

    let sum = 0;

    for (let i = 0; i < 10; i += 1) {
        sum += dp[n][i];
    }
    console.log(sum);
};

solution(`3`);
