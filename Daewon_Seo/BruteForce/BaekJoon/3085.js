const solution = (input) => {
    const [N, ...candies] = input
        .toString()
        .trim()
        .split('\n')
        .map((el, i) => (i === 0 ? +el : el.split('')));

    let max = Number.MIN_SAFE_INTEGER;

    const cntCandies = () => {
        let maxCnt = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < N; i++) {
            let cnt = 1;
            for (let j = 1; j < N; j++) {
                if (candies[i][j - 1] === candies[i][j]) {
                    cnt += 1;
                } else {
                    maxCnt = Math.max(maxCnt, cnt);
                    cnt = 1;
                }
            }
            maxCnt = Math.max(maxCnt, cnt);
        }

        for (let i = 0; i < N; i++) {
            let cnt = 1;
            for (let j = 0; j < N - 1; j++) {
                if (candies[j + 1][i] === candies[j][i]) {
                    cnt += 1;
                } else {
                    maxCnt = Math.max(maxCnt, cnt);
                    cnt = 1;
                }
            }
            maxCnt = Math.max(maxCnt, cnt);
        }

        return maxCnt;
    };

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N - 1; j++) {
            [candies[i][j], candies[i][j + 1]] = [
                candies[i][j + 1],
                candies[i][j],
            ];
            max = Math.max(max, cntCandies());
            [candies[i][j], candies[i][j + 1]] = [
                candies[i][j + 1],
                candies[i][j],
            ];
            [candies[j][i], candies[j + 1][i]] = [
                candies[j + 1][i],
                candies[j][i],
            ];
            max = Math.max(max, cntCandies());
            [candies[j][i], candies[j + 1][i]] = [
                candies[j + 1][i],
                candies[j][i],
            ];
        }
    }

    console.log(max);
};
solution(`5
YCPZY
CYZZP
CCPPP
YCYZC
CPPZZ`);
