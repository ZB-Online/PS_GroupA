const solution = (input) => {
    const [testNum, T] = input
        .toString()
        .trim()
        .split('\n')
        .map((el, i) => (i === 0 ? +el : el.split(' ').map((n) => +n)));

    const dp = Array(testNum + 1);
    const indices = Array(testNum + 1);

    for (let i = 0; i < testNum; i += 1) {
        let max = 0;
        let maxIdx = -1;
        for (let j = 0; j < i; j += 1) {
            if (T[i] > T[j] && dp[j] > max) {
                max = dp[j];
                maxIdx = j;
            }
        }
        dp[i] = max + 1;
        indices[i] = maxIdx !== -1 ? indices[maxIdx].concat(T[i]) : [T[i]];
    }
    console.log(dp);

    const maxLength = Math.max(...dp);

    console.log(maxLength);

    console.log(indices[dp.indexOf(maxLength)].join(''));
};

solution(`6
10 20 10 30 20 50`);
