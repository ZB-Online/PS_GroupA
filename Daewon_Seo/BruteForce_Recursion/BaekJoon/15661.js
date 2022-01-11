const solution = (s) => {
    let [N, ...m] = s.toString().trim().split('\n');
    const grid = m.map((el) => el.split(' ').map((el) => +el));

    N = Number(N);

    const checked = Array.from({ length: N }, () => false);

    let min = Number.MAX_SAFE_INTEGER;

    const calDiff = () => {
        let startPoints = 0;
        let linkPoints = 0;

        for (let i = 0; i < N - 1; i++) {
            for (let j = i + 1; j < N; j++) {
                if (checked[i] && checked[j]) {
                    startPoints += grid[i][j] + grid[j][i];
                } else if (!checked[i] && !checked[j]) {
                    linkPoints += grid[i][j] + grid[j][i];
                }
            }
        }

        const diff = Math.abs(startPoints - linkPoints);

        min = min > diff ? diff : min;
    };

    const getComb = (idx, count, teamNum) => {
        if (count === teamNum) {
            calDiff();
            return;
        }

        for (let i = idx; i < N; i++) {
            if (!checked[i]) {
                checked[i] = true;
                getComb(i + 1, count + 1, teamNum);
                checked[i] = false;
            }
        }
    };

    for (let i = 1; i <= N / 2; i++) {
        getComb(0, 0, i);
    }

    console.log(min);

    return min + '';
};

// solution(`5
// 0 3 1 1 1
// 3 0 1 1 1
// 1 1 0 1 1
// 1 1 1 0 1
// 1 1 1 1 0`);

test('TC1', () => {
    expect(
        solution(`4
0 1 2 3
4 0 5 6
7 1 0 2
3 4 5 0`)
    ).toStrictEqual(`0`);
});

test('TC2', () => {
    expect(
        solution(`6
0 1 2 3 4 5
1 0 2 3 4 5
1 2 0 3 4 5
1 2 3 0 4 5
1 2 3 4 0 5
1 2 3 4 5 0`)
    ).toStrictEqual(`2`);
});

test('TC3', () => {
    expect(
        solution(`8
0 5 4 5 4 5 4 5
4 0 5 1 2 3 4 5
9 8 0 1 2 3 1 2
9 9 9 0 9 9 9 9
1 1 1 1 0 1 1 1
8 7 6 5 4 0 3 2
9 1 9 1 9 1 0 9
6 5 4 3 2 1 9 0`)
    ).toStrictEqual(`1`);
});

test('TC4', () => {
    expect(
        solution(`5
0 3 1 1 1
3 0 1 1 1
1 1 0 1 1
1 1 1 0 1
1 1 1 1 0`)
    ).toStrictEqual(`0`);
});
