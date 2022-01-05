const solution = (s) => {
    const input = s.toString().trim().split('\n');
    const len = input[0];

    const RED = 0;
    const GREEN = 1;
    const BLUE = 2;

    const houses = [];

    for (let i = 1; i <= len; i++) {
        houses.push(input[i].split(' ').map((el) => +el));
    }

    for (let j = 1; j < len; j++) {
        houses[j][RED] += Math.min(houses[j - 1][GREEN], houses[j - 1][BLUE]);
        houses[j][GREEN] += Math.min(houses[j - 1][RED], houses[j - 1][BLUE]);
        houses[j][BLUE] += Math.min(houses[j - 1][GREEN], houses[j - 1][RED]);
    }

    console.log(Math.min(...houses[len - 1]));
    return Math.min(...houses[len - 1]) + '';
};

// solution(`3
// 1 100 100
// 100 100 100
// 1 100 100`);

test('TC1', () => {
    expect(
        solution(`6
30 19 5
64 77 64
15 19 97
4 71 57
90 86 84
93 32 91`)
    ).toStrictEqual(`208`);
});
