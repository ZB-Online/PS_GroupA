const solution = (input) => {
    const [testNum, T] = input
        .toString()
        .trim()
        .split('\n')
        .map((el, i) => (i === 0 ? +el : el.split(' ').map((n) => +n)));

    const dp = Array(testNum + 1);
    const indices = Array(testNum + 1);

    // 최대 dp 길이 값
    let max = 1;

    // 최대 길이를 만족시키는 부분 수열의 마지막 인덱스, 초기는 0으로
    let last = 0;

    // 반복문을 통해 점화식을 구성하여 최소값을 채워나감
    for (let i = 0; i < testNum; i += 1) {
        dp[i] = 1; // 각 위치를 1로 우선 초기화
        indices[i] = -1; // 이전 Index가 돌아갈 곳이 없도록 초기에는 -1로 초기화
        for (let j = i - 1; j >= 0; j -= 1) {
            // 이전 값이 더 작으면서 dp 길이 값은 같거나 큰 경우
            if (T[i] > T[j] && dp[j] >= dp[i]) {
                dp[i] = dp[j] + 1;
                indices[i] = j; // 이전의 Index를 저장함
            }
            // 현재 LIS값이 변경된 값보다 작은 경우
            if (max < dp[i]) {
                max = dp[i];
                last = i; // 최대 길이가 변경되어야 한다.
            }
        }
    }

    console.log(dp, last);

    return last;
};

solution(`7
3 2 5 2 3 1 4`);
