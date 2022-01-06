const solution = (s) => {
    const input = s
        .toString()
        .trim()
        .split('\n')
        .map((el) => el.split(' ').map(Number));
    const [[size], ...board] = input;

    let ans = 0;
    let ret = 0;

    const visited = Array.from({ length: size * 2 + 1 }, () =>
        new Array(size * 2 + 1).fill(false)
    );

    const backtracking = (row, col, cnt, isWhite) => {
        if (ans < cnt) ans = cnt;
        if (col >= size - 1) {
            row += 1;
        }

        for (let i = row; i < size; i++) {
            for (
                let j = isWhite ? (i % 2 === 0 ? 0 : 1) : i % 2 === 0 ? 1 : 0;
                j < size;
                j += 2
            ) {
                if (
                    board[i][j] === 0 ||
                    visited[i + j][0] ||
                    visited[i - j + size][1]
                )
                    continue;
                visited[i + j][0] = true;
                visited[i - j + size][1] = true;
                backtracking(i, j, cnt + 1, isWhite);
                visited[i + j][0] = false;
                visited[i - j + size][1] = false;
            }
        }
    };

    backtracking(0, 0, 0, true);
    ret += ans;
    ans = 0;
    backtracking(0, 1, 0, false);
    console.log(ret + ans);
    return ret + ans + '';
};
// solution(`5
// 1 1 0 1 1
// 0 1 0 0 0
// 1 0 1 0 1
// 1 0 0 0 0
// 1 0 1 1 1`);

test('TC1', () => {
    expect(
        solution(`5
1 1 0 1 1
0 1 0 0 0
1 0 1 0 1
1 0 0 0 0
1 0 1 1 1`)
    ).toStrictEqual(`7`);
});
