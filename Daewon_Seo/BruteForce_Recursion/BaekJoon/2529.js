const solution = (s) => {
    let [N, ...m] = s.toString().trim().split('\n');
    const [inequalities] = m.map((el) => el.split(' '));

    N = Number(N);

    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const checked = Array(10).fill(false);

    let curIdx = 0;

    const compareValues = (val1, val2, inequality) =>
        inequality === '>' ? val1 > val2 : val1 < val2;

    const result = [];

    const getComb = (arr, pickNum, prefix = []) => {
        if (pickNum === 0) return [prefix];

        return arr.flatMap((v, i) =>
            getComb(arr.slice(i + 1), pickNum - 1, [...prefix, v])
        );
    };
};

solution(`2
< >`);
