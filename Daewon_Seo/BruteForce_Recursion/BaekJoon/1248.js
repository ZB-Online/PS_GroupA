const solution = (s) => {
    let [N, ...m] = s.toString().trim().split('\n');
    const [signArr] = m.map((el) => el.split(''));

    N = Number(N);

    const nums = [
        -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10,
    ];

    const usedArr = Array(N).fill(0);
    const sumArr = [];
    const checked = Array(nums.length).fill(false);

    // const dfs = (count, comb) => {
    //     if(count === )
    // }

    // for (let i = 0; i < nums.length; i++) {
    //     checked[i] = true;
    //     dfs(0, []);
    //     checked[i] = false;
    // }
};

solution(`4
-+0++++--+`);
