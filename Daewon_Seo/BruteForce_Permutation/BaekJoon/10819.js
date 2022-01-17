const solution = (input) => {
    const [N, nums] = input
        .toString()
        .trim()
        .split('\n')
        .map((input, i) => (i === 0 ? +input : input.split(' ').map(Number)));

    const checked = Array.from({ length: N }, () => false);

    let max = 0;

    let res = [];

    const getSum = (arr) => {
        let sum = 0;

        for (let i = 0; i < arr.length - 1; i++) {
            sum += Math.abs(arr[i] - arr[i + 1]);
        }
        return sum;
    };

    const dfs = (cnt) => {
        if (cnt === N) {
            max = Math.max(getSum(res), max);
            return;
        }

        for (let i = 0; i < N; i++) {
            if (!checked[i]) {
                res.push(nums[i]);
                checked[i] = true;
                dfs(cnt + 1);
                res.pop();
                checked[i] = false;
            }
        }
    };

    dfs(0);
    console.log(max);
};

solution(`6
20 1 15 8 4 10`);
