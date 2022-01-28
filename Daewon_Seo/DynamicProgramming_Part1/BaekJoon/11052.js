const solution = (input) => {
    const [N, cardPacks] = input
        .toString()
        .trim()
        .split('\n')
        .map((el, i) => (i === 0 ? +el : el.split(' ').map((num) => +num)));

    const dp = Array.from({ length: cardPacks.length + 1 }, () => 0);

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] = Math.max(dp[i], dp[i - j] + cardPacks[j - 1]);
        }
    }

    console.log(dp);
};
solution(`4
1 5 6 7`);
