const solution = (s) => {
    const [N, ...schedule] = s
        .toString()
        .trim()
        .split('\n')
        .map((el, i) => (i === 0 ? +el : el.split(' ').map(Number)));

    const checked = Array.from(
        {
            length: N,
        },
        () => 0
    );

    let max = Number.MIN_SAFE_INTEGER;

    const confirmSchedule = (idx, profit) => {
        if (idx === N) {
            max = Math.max(max, profit);
            return;
        }

        if (idx > N) return;

        const [time, pay] = schedule[idx];

        confirmSchedule(idx + time, profit + pay);
        confirmSchedule(idx + 1, profit);
    };

    confirmSchedule(0, 0);

    console.log(max);

    return max + '';
};

// solution(`7
// 3 10
// 5 20
// 1 10
// 1 20
// 2 15
// 4 40
// 2 200`);

test('TC1', () => {
    expect(
        solution(`7
3 10
5 20
1 10
1 20
2 15
4 40
2 200`)
    ).toStrictEqual(`45`);
});

test('TC2', () => {
    expect(
        solution(`10
1 1
1 2
1 3
1 4
1 5
1 6
1 7
1 8
1 9
1 10`)
    ).toStrictEqual(`55`);
});

test('TC3', () => {
    expect(
        solution(`10
5 10
5 9
5 8
5 7
5 6
5 10
5 9
5 8
5 7
5 6`)
    ).toStrictEqual(`20`);
});

test('TC4', () => {
    expect(
        solution(`10
5 50
4 40
3 30
2 20
1 10
1 10
2 20
3 30
4 40
5 50`)
    ).toStrictEqual(`90`);
});
