const solution = (input) => {
    const [N, M] = input
        .toString()
        .trim()
        .split(' ')
        .map((el) => +el);

    const nums = Array.from({ length: N }, (_, i) => i + 1);
    const checked = Array.from({ length: N + 1 }, () => false);

    const dfs = (permute = []) => {
        if (permute.length === M) {
            console.log(permute.join(' '));
            return;
        }

        for (let i = 0; i < N; i++) {
            if (!checked[i]) {
                permute.push(nums[i]);
                checked[i] = true;
                dfs(permute);
                permute.pop();
                checked[i] = false;
            }
        }
    };

    dfs([]);
};

solution(`4 2`);

// test('TC1', () => {
//     expect(solution(`3 1`)).toStrictEqual(`1
// 2
// 3`);
// });

// test('TC2', () => {
//     expect(solution(`4 2`)).toStrictEqual(`1 2
// 1 3
// 1 4
// 2 1
// 2 3
// 2 4
// 3 1
// 3 2
// 3 4
// 4 1
// 4 2
// 4 3`);
// });

// test('TC3', () => {
//     expect(solution(`4 4`)).toStrictEqual(`1 2 3 4
// 1 2 4 3
// 1 3 2 4
// 1 3 4 2
// 1 4 2 3
// 1 4 3 2
// 2 1 3 4
// 2 1 4 3
// 2 3 1 4
// 2 3 4 1
// 2 4 1 3
// 2 4 3 1
// 3 1 2 4
// 3 1 4 2
// 3 2 1 4
// 3 2 4 1
// 3 4 1 2
// 3 4 2 1
// 4 1 2 3
// 4 1 3 2
// 4 2 1 3
// 4 2 3 1
// 4 3 1 2
// 4 3 2 1`);
// });
