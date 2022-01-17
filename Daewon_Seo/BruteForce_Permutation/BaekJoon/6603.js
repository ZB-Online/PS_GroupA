const solution = (input) => {
    const [...numsArr] = input
        .toString()
        .trim()
        .split('\n')
        .map((input) => input.split(' ').map(Number));

    const len = numsArr.length;

    let res = '';

    const getComb = (arr, pick, prefix = []) => {
        if (pick === 0) {
            res += `${[...prefix].join(' ')}\n`;
            return;
        }
        return arr.flatMap((v, i) =>
            getComb(arr.slice(i + 1), pick - 1, [...prefix, v])
        );
    };

    for (let i = 0; i < len; i++) {
        getComb(numsArr[i].slice(1), 6);
        if (i === len - 2) {
            res = res.slice(0, -1);
            break;
        }
        res += '\n';
    }

    console.log(res);
    return res;
};

// solution(`7 1 2 3 4 5 6 7
// 8 1 2 3 5 8 13 21 34
// 0`);

test('TC1', () => {
    expect(
        solution(`7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`)
    ).toStrictEqual(`1 2 3 4 5 6
1 2 3 4 5 7
1 2 3 4 6 7
1 2 3 5 6 7
1 2 4 5 6 7
1 3 4 5 6 7
2 3 4 5 6 7

1 2 3 5 8 13
1 2 3 5 8 21
1 2 3 5 8 34
1 2 3 5 13 21
1 2 3 5 13 34
1 2 3 5 21 34
1 2 3 8 13 21
1 2 3 8 13 34
1 2 3 8 21 34
1 2 3 13 21 34
1 2 5 8 13 21
1 2 5 8 13 34
1 2 5 8 21 34
1 2 5 13 21 34
1 2 8 13 21 34
1 3 5 8 13 21
1 3 5 8 13 34
1 3 5 8 21 34
1 3 5 13 21 34
1 3 8 13 21 34
1 5 8 13 21 34
2 3 5 8 13 21
2 3 5 8 13 34
2 3 5 8 21 34
2 3 5 13 21 34
2 3 8 13 21 34
2 5 8 13 21 34
3 5 8 13 21 34`);
});
