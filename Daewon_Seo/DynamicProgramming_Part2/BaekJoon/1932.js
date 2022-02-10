const solution = (input) => {
    const [height, ...nums] = input
        .toString()
        .trim()
        .split('\n')
        .map((el, i) => (i === 0 ? +el : el.split(' ').map((num) => +num)));

    const dp = [0].concat(nums.map((arr) => arr.slice()));
    for (let i = 2; i <= height; i += 1) {
        for (let j = 0; j <= i - 1; j += 1) {
            if (j === 0) {
                dp[i][j] = dp[i - 1][j] + nums[i - 1][j];
            } else if (j === i - 1) {
                dp[i][j] = dp[i - 1][j - 1] + nums[i - 1][j];
            } else {
                dp[i][j] = Math.max(
                    dp[i - 1][j - 1] + nums[i - 1][j],
                    dp[i - 1][j] + nums[i - 1][j]
                );
            }
        }
    }

    console.log(Math.max(...dp[height]));
};

solution(`5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`);
