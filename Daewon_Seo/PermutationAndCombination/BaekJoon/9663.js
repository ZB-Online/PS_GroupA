const solution = (s) => {
    const input = +s.toString().trim();

    const result = [];

    const dfs = (row, num, slate) => {
        // backtarcking case
        let lastQ = row - 1;

        for (let prevQ = 0; prevQ < lastQ; prevQ++) {
            // col conflict
            if (slate[prevQ] === slate[lastQ]) return;

            // if dia conflict
            const colDiff = Math.abs(slate[prevQ] - slate[lastQ]);
            const rowDiff = Math.abs(prevQ - lastQ);

            if (rowDiff === colDiff) return;
        }
        // base case
        if (row === num) {
            result.push([...slate]);
            return;
        }

        // dfs recursive case
        for (let col = 0; col < num; col++) {
            slate.push(col);
            dfs(row + 1, num, slate);
            slate.pop();
        }

        console.log(slate);
    };

    dfs(0, input, []);
    console.log(result.length);
    return result.length + '';
};

solution(`8`);

// test('TC1', () => {
//     expect(solution(`8`)).toStrictEqual(`92`);
// });
