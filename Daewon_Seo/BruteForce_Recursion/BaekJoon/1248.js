const solution = (s) => {
    let [N, ...m] = s.toString().trim().split('\n');
    const [inputSigns] = m.map((el) => el.split(''));

    N = Number(N);

    const nums = [
        -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10,
    ];

    const signArr = Array.from({ length: N }, () =>
        Array.from({ length: N }, () => 0)
    );

    let curIdx = 0;

    for (let i = 0; i < signArr.length; i++) {
        for (let j = i; j < signArr.length; j++) {
            signArr[i][j] = inputSigns[curIdx++];
        }
    }

    const result = [];

    const check = (idx) => {
        for (let i = 0; i <= idx; i++) {
            let sum = 0;
            for (let j = i; j <= idx; j++) {
                sum += result[j];
                if (signArr[i][j] !== (sum === 0 ? '0' : sum > 0 ? '+' : '-'))
                    return false;
            }
        }
        return true;
    };

    const dfs = (cnt) => {
        if (cnt === N) {
            console.log(result.join(' '));
            process.exit();
        }

        for (let i = 0; i < nums.length; i++) {
            result[cnt] = nums[i];
            if (check(cnt)) dfs(cnt + 1);
        }
    };

    dfs(0);
};

solution(`4
-+0++++--+`);
