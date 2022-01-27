const solution = (input) => {
    const N = input.toString().trim();

    const num = +N;

    const dp = [0];

    dp[1] = 9;

    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i - 1] + 1 + (9 - i - 1) * 2;
    }

    console.log(dp[N]);
};
solution(`3`);
