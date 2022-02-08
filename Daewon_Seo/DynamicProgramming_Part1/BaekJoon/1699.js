const solution = (input) => {
    const N = input.toString().trim();

    const target = +N;

    if (target <= 3) return target;

    const dp = Array(target + 1);

    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;

    for (let i = 4; i <= N; i += 1) {
        dp[i] = i;

        for (let j = 1; j <= Math.ceil(Math.sqrt(i)); j += 1) {
            const temp = j ** 2;
            if (temp > i) break;
            else dp[i] = Math.min(dp[i], dp[i - temp] + 1);
        }
    }

    console.log(dp[target]);
};

solution(`7`);
