const solution = (input) => {
    const [N, cardPacks] = input
        .toString()
        .trim()
        .split('\n')
        .map((el, i) => (i === 0 ? +el : el.split(' ').map((num) => +num)));

    const dp = [0, ...cardPacks];

    for (let i = 2; i <= N; i += 1) {
        for (let j = 1; j <= i / 2; j += 1) {
            dp[i] = Math.max(dp[i], dp[j] + dp[i - j]);
        }
    }

    console.log(dp[N]);
};
solution(`5
10 9 8 7 6`);
