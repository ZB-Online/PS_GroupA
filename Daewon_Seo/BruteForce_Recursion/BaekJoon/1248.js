const solution = (s) => {
    let [N, ...m] = s.toString().trim().split('\n');
    const [sumArr] = m.map((el) => el.split(''));

    N = Number(N);

    const nums = [
        -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10,
    ];

    const getComb = (arr, pickNum, prefix = []) => {
        if (pickNum === 0) return [prefix];

        return arr.flatMap((v, i) =>
            getComb(arr.slice(i + 1), pickNum - 1, [...prefix, v])
        );
    };

    console.log(getComb(nums, N));
};

solution(`4
-+0++++--+`);
